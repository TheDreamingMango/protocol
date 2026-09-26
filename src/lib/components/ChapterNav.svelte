<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Chapter } from '$lib/content';

	let { prev, next }: { prev?: Chapter; next?: Chapter } = $props();
</script>

<nav aria-label="Chapters">
	{#if prev}
		<a class="prev" href={resolve('/[slug]', { slug: prev.slug })}>
			<span class="mono">Previous</span>
			<span>{prev.title}</span>
		</a>
	{/if}
	{#if next}
		<a class="next" href={resolve('/[slug]', { slug: next.slug })}>
			<span class="mono">Next</span>
			<span>{next.title}</span>
		</a>
	{/if}
</nav>

<style>
	nav {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-3);
		margin-top: var(--space-6);
		padding-top: var(--space-4);
		border-top: 1px solid var(--line);
	}

	a {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
		padding: var(--space-3);
		border: 1px solid var(--line);
		border-radius: var(--radius);
		color: var(--text);
		text-decoration: none;
	}

	a:hover {
		border-color: var(--accent);
	}

	.next {
		grid-column: 2;
		text-align: right;
	}
</style>
