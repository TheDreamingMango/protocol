import GithubSlugger from 'github-slugger';
import type { Component } from 'svelte';

type Module = { default: Component; metadata?: { title?: string; summary?: string } };

export type Heading = { id: string; text: string };

export type Page = {
	slug: string;
	title: string;
	summary: string;
	component: Component;
};

export type Chapter = Page & { number: number };

export type Guide = Page & { headings: Heading[] };

const chapterModules = import.meta.glob<Module>('/src/content/chapters/*.md', { eager: true });
const guideModules = import.meta.glob<Module>('/src/content/guides/*.md', { eager: true });
const guideSources = import.meta.glob<string>('/src/content/guides/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
});

function basename(path: string) {
	return path.split('/').pop()!.replace(/\.md$/, '');
}

function toPage(path: string, mod: Module, slug: string): Page {
	return {
		slug,
		title: mod.metadata?.title ?? slug,
		summary: mod.metadata?.summary ?? '',
		component: mod.default
	};
}

/** Must slug headings the same way rehype-slug does so ids match the rendered page. */
function extractHeadings(source: string): Heading[] {
	const slugger = new GithubSlugger();
	const body = source.replace(/^---[\s\S]*?\n---\n/, '');
	const headings: Heading[] = [];
	let inFence = false;

	for (const line of body.split('\n')) {
		if (/^(```|~~~)/.test(line)) inFence = !inFence;
		if (inFence) continue;

		const match = /^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(line);
		if (!match) continue;

		const id = slugger.slug(match[2]);
		if (match[1].length === 2) headings.push({ id, text: match[2] });
	}

	return headings;
}

/** Chapter files are named `NN-slug.md`; the prefix sets the reading order. */
export const chapters: Chapter[] = Object.entries(chapterModules)
	.map(([path, mod]) => {
		const [, number, slug] = /^(\d+)-(.+)$/.exec(basename(path))!;
		return { ...toPage(path, mod, slug), number: Number(number) };
	})
	.sort((a, b) => a.number - b.number);

export const guides: Guide[] = Object.entries(guideModules).map(([path, mod]) => ({
	...toPage(path, mod, basename(path)),
	headings: extractHeadings(guideSources[path])
}));

export function getChapter(slug: string) {
	const index = chapters.findIndex((c) => c.slug === slug);
	if (index === -1) return undefined;
	return { chapter: chapters[index], prev: chapters[index - 1], next: chapters[index + 1] };
}

export function getGuide(slug: string) {
	return guides.find((g) => g.slug === slug);
}
