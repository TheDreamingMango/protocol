<script lang="ts">
	import { resolve } from '$app/paths';
	import { siteName } from '$lib/config';
	import { chapters } from '$lib/content';

	const first = chapters[0];
	const description =
		'A personal protocol for reducing maladaptive daydreaming by making the trade-off harder for your mind.';
</script>

<svelte:head>
	<title>{siteName}</title>
	<meta name="description" content={description} />
</svelte:head>

<section class="hero">
	<h1>A protocol for reducing maladaptive daydreaming.</h1>
	<p class="lede">
		You slip into a daydream when the present isn't good enough. This protocol makes that
		trade-off harder. Make the present more worth living, block the music and social media that
		make daydreams easy, and lock away what can't be blocked.
	</p>
	{#if first}
		<a class="start" href={resolve('/[slug]', { slug: first.slug })}>Start reading</a>
	{/if}
</section>

<section id="contents" aria-labelledby="contents-heading">
	<h2 id="contents-heading">Contents</h2>
	<ol>
		{#each chapters as chapter (chapter.slug)}
			<li>
				<a href={resolve('/[slug]', { slug: chapter.slug })}>
					<span class="num mono">{String(chapter.number).padStart(2, '0')}</span>
					<span class="title">{chapter.title}</span>
					{#if chapter.summary}<span class="summary">{chapter.summary}</span>{/if}
				</a>
			</li>
		{/each}
	</ol>
</section>

<style>
	.hero {
		min-height: 78svh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: var(--space-5) 0;
	}

	h1 {
		font-size: clamp(2.5rem, 7vw, 4.25rem);
		line-height: 1.05;
		letter-spacing: -0.03em;
		margin: 0 0 var(--space-4);
		text-wrap: balance;
	}

	.lede {
		font-size: 1.1875rem;
		line-height: 1.6;
		color: var(--muted);
		margin: 0 0 var(--space-5);
		max-width: 52ch;
		text-wrap: pretty;
	}

	.start {
		align-self: flex-start;
		font-weight: 600;
		text-decoration-thickness: 1px;
		text-underline-offset: 0.35em;
		transition: text-underline-offset 0.2s ease;
	}

	.start:hover {
		text-underline-offset: 0.5em;
	}

	#contents {
		padding-top: var(--space-5);
	}

	h2 {
		font-size: 1rem;
		margin: 0 0 var(--space-3);
	}

	ol {
		list-style: none;
		padding: 0;
		margin: 0;
		border-bottom: 1px solid var(--line);
	}

	li {
		border-top: 1px solid var(--line);
	}

	li a {
		display: grid;
		grid-template-columns: 3ch 1fr;
		column-gap: var(--space-3);
		padding: var(--space-4) 0;
		color: var(--text);
		text-decoration: none;
	}

	.num {
		line-height: inherit;
	}

	.title {
		font-weight: 600;
		transition: color 0.2s ease;
	}

	li a:hover .title {
		color: var(--accent);
	}

	.summary {
		grid-column: 2;
		color: var(--muted);
	}

	@media (max-width: 40rem) {
		.hero {
			min-height: 0;
			padding: var(--space-6) 0 var(--space-5);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.start,
		.title {
			transition: none;
		}
	}
</style>
