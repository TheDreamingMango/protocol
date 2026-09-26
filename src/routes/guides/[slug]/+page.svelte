<script lang="ts">
	import { resolve } from '$app/paths';
	import { siteName } from '$lib/config';
	import Toc from '$lib/components/Toc.svelte';

	let { data } = $props();

	const Content = $derived(data.guide.component);
</script>

<svelte:head>
	<title>{data.guide.title} · {siteName}</title>
</svelte:head>

<article>
	<p class="mono">
		<a href={resolve('/[slug]', { slug: 'iphone' })}>Back to the iPhone chapter</a>
	</p>
	<h1>{data.guide.title}</h1>
	<Toc headings={data.guide.headings} />
	<Content />
</article>
