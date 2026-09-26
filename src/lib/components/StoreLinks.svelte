<script lang="ts">
	import { storeLinks } from '$lib/config';

	const links = [
		{ label: 'App Store', href: storeLinks.appStore },
		{ label: 'Google Play', href: storeLinks.googlePlay }
	].filter((link): link is { label: string; href: string } => link.href !== null);
</script>

{#if links.length}
	<p class="links">
		{#each links as link (link.label)}
			<a href={link.href} rel="external">{link.label}</a>
		{/each}
	</p>
{/if}

<style>
	.links {
		display: flex;
		gap: var(--space-3);
		justify-content: center;
	}

	a {
		padding: var(--space-2) var(--space-4);
		border: 1px solid var(--accent);
		border-radius: var(--radius);
		text-decoration: none;
	}
</style>
