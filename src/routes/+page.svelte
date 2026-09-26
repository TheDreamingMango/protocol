<script lang="ts">
	import { resolve } from '$app/paths';
	import { siteName } from '$lib/config';
	import { chapters } from '$lib/content';

	const first = chapters[0];
</script>

<svelte:head>
	<title>{siteName}</title>
</svelte:head>

<section class="intro">
	<h1>{siteName}</h1>
	{#if first}
		<a class="start" href={resolve('/[slug]', { slug: first.slug })}>Start reading</a>
	{/if}
</section>

<section id="contents" aria-labelledby="contents-heading">
	<h2 id="contents-heading" class="mono">Contents</h2>
	<ol>
		{#each chapters as chapter (chapter.slug)}
			<li>
				<a href={resolve('/[slug]', { slug: chapter.slug })}>
					<span class="mono">{String(chapter.number).padStart(2, '0')}</span>
					<span>{chapter.title}</span>
				</a>
				{#if chapter.summary}<p>{chapter.summary}</p>{/if}
			</li>
		{/each}
	</ol>
</section>

<style>
	.intro {
		padding: var(--space-6) 0 var(--space-5);
	}

	.start {
		display: inline-block;
		padding: var(--space-2) var(--space-4);
		border: 1px solid var(--accent);
		border-radius: var(--radius);
		text-decoration: none;
	}

	ol {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	li {
		border-top: 1px solid var(--line);
	}

	li a {
		display: flex;
		gap: var(--space-3);
		align-items: baseline;
		padding: var(--space-3) 0;
		color: var(--text);
		text-decoration: none;
	}

	li a:hover span:last-child {
		color: var(--accent);
	}

	li p {
		margin: calc(-1 * var(--space-2)) 0 var(--space-3);
		padding-left: calc(2ch + var(--space-3) + 0.5ch);
		color: var(--muted);
	}
</style>
