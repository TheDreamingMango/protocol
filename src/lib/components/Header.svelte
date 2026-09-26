<script lang="ts">
	import { resolve } from '$app/paths';
	import { siteName } from '$lib/config';
</script>

<header class="container">
	<a class="name" href={resolve('/')}>{siteName}</a>
	<a class="mono" href="{resolve('/')}#contents">Contents</a>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		padding-top: var(--space-4);
		padding-bottom: var(--space-4);
	}

	a {
		text-decoration: none;
	}

	.name {
		color: var(--text);
		font-weight: 600;
	}

	.mono:hover {
		color: var(--accent);
	}
</style>
