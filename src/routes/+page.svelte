<script lang="ts">
	import { resolve } from '$app/paths';
	import { siteName } from '$lib/config';
	import { chapters } from '$lib/content';

	const first = chapters[0];
	const description =
		'Walter Mitty stopped daydreaming, and his life got better. The Walter Mitty Protocol is a personal protocol for reducing maladaptive daydreaming.';
</script>

<svelte:head>
	<title>{siteName}</title>
	<meta name="description" content={description} />
</svelte:head>

<section class="hero">
	<h1>Walter Mitty Protocol</h1>
	<div class="story">
		<p>
			Walter Mitty couldn't stop daydreaming. In the middle of an ordinary day, he would drift
			off into a scene where he was the hero. The daydreams felt better than his life, so he kept
			going back to them, and his real life stayed small.
		</p>
		<p>
			Then he stopped. He put himself into the life in front of him, and it got better.
		</p>
	</div>
	<p class="turn">You can do what Walter did.</p>
</section>

<section class="intro" aria-labelledby="md-heading">
	<h2 id="md-heading">Maladaptive daydreaming</h2>
	<p>
		You slip into a daydream when the present isn't good enough. In a daydream you can be anyone,
		and it feels incredible. Daydreaming becomes maladaptive when you do it for hours. All that
		energy goes into something that isn't real, when it could have gone into your actual life.
	</p>
</section>

<section class="intro" aria-labelledby="site-heading">
	<h2 id="site-heading">What this site is</h2>
	<p>
		This site describes a protocol for reducing maladaptive daydreaming as much as possible. It
		makes the choice to daydream harder for your mind. You make the present more worth living,
		you block the music and social media that make daydreams easy, and you lock away the devices
		that can't be blocked.
	</p>
	<p>
		Much of the protocol uses technology to keep those blocks out of easy reach: a supervised
		iPhone, a MacBook where you aren't the admin, a password that takes about eight hours to
		compute, and a box with a time lock.
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

	.story p {
		font-size: 1.1875rem;
		line-height: 1.6;
		color: var(--muted);
		margin: 0 0 var(--space-3);
		max-width: 52ch;
		text-wrap: pretty;
	}

	.turn {
		font-size: clamp(1.625rem, 4vw, 2.25rem);
		line-height: 1.2;
		letter-spacing: -0.02em;
		font-weight: 600;
		margin: var(--space-5) 0 0;
		text-wrap: balance;
	}

	.intro {
		padding-top: var(--space-5);
	}

	.intro h2 {
		font-size: 1.375rem;
		margin-top: 0;
	}

	.intro p {
		margin: 0 0 var(--space-3);
		text-wrap: pretty;
	}

	.start {
		display: inline-block;
		margin-top: var(--space-3);
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
