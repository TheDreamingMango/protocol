<script lang="ts">
	import type { Heading } from '$lib/content';

	let { headings }: { headings: Heading[] } = $props();
</script>

{#if headings.length}
	<nav aria-label="On this page">
		<p class="mono">On this page</p>
		<ol>
			{#each headings as heading (heading.id)}
				<li><a href="#{heading.id}">{heading.text}</a></li>
			{/each}
		</ol>
	</nav>
{/if}

<style>
	nav {
		margin: 0 0 var(--space-5);
		padding: var(--space-3) var(--space-4);
		background: var(--surface);
		border-radius: var(--radius);
	}

	p {
		margin: 0 0 var(--space-2);
	}

	ol {
		margin: 0;
		padding-left: var(--space-4);
	}
</style>
