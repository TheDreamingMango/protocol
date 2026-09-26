import { error } from '@sveltejs/kit';
import { chapters, getChapter } from '$lib/content';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => chapters.map(({ slug }) => ({ slug }));

export const load: PageLoad = ({ params }) => {
	const result = getChapter(params.slug);
	if (!result) error(404, 'Not found');
	return { ...result, total: chapters.length };
};
