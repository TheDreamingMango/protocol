<script lang="ts">
	import { resolve } from '$app/paths';
	import { siteName } from '$lib/config';
	import { chapters } from '$lib/content';

	const first = chapters[0];
	const description =
		'A protocol I devised for myself and wanted to share. It reduces maladaptive daydreaming as much as possible by making it a harder choice.';
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
			off into a bigger life than the one he had. It felt better than being there, so he kept
			going back, and his real life stayed small.
		</p>
		<p>
			Then he stopped. The life he kept escaping became one he didn't want to leave.
		</p>
	</div>
	<figure class="still">
		<img
			src="/walter-mitty.jpg"
			alt="Walter Mitty with a pack on his back, looking out across an open landscape."
			width="640"
			height="360"
		/>
	</figure>
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
	<p>I devised this protocol for myself, and I wanted to share it.</p>
	<p>
		It reduces maladaptive daydreaming as much as possible by making it a harder choice. You make
		the present more worth living. You block the music and social media that make a daydream easy,
		and you lock away devices that can't be blocked. That is the protocol, with or without an
		iPhone or a Mac.
	</p>
	<p>
		I use a supervised iPhone and a MacBook where I am not the admin. A password that takes about
		eight hours to compute is what lets me change either one. Devices that can't be blocked go in
		a time-lock box. The iPhone chapter and its setup guide are for people with an iPhone. The
		MacBook chapter is for people with a Mac.
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
	section + section {
		margin-top: var(--space-6);
	}

	.hero {
		padding-top: var(--space-6);
	}

	h2 {
		margin: 0 0 var(--space-3);
	}

	h1 {
		font-size: var(--text-display);
		line-height: var(--leading-display);
		letter-spacing: var(--tracking-display);
		margin: 0 0 var(--space-4);
		text-wrap: balance;
	}

	.story p {
		font-size: var(--text-lede);
		line-height: var(--leading-lede);
		margin: 0 0 var(--space-3);
		max-width: 52ch;
		text-wrap: pretty;
	}

	.still {
		margin: var(--space-5) 0 0;
	}

	.still img {
		display: block;
		width: 100%;
		height: auto;
	}

	.turn {
		font-size: var(--text-turn);
		line-height: var(--leading-turn);
		letter-spacing: var(--tracking-turn);
		font-weight: 600;
		margin: var(--space-5) 0 0;
		text-wrap: balance;
	}

	.intro p {
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
		padding: var(--space-3) 0;
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
			padding-top: var(--space-5);
		}

		section + section {
			margin-top: var(--space-5);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.start,
		.title {
			transition: none;
		}
	}
</style>
