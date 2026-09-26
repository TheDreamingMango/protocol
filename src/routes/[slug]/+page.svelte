<script lang="ts">
	import { siteName } from '$lib/config';
	import ChapterNav from '$lib/components/ChapterNav.svelte';

	let { data } = $props();

	const Content = $derived(data.chapter.component);
</script>

<svelte:head>
	<title>{data.chapter.title} · {siteName}</title>
</svelte:head>

<article>
	<p class="mono">Chapter {data.chapter.number} of {data.total}</p>
	<h1>{data.chapter.title}</h1>
	<Content />
</article>

<ChapterNav prev={data.prev} next={data.next} />
