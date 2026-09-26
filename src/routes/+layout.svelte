<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<Header />

<main class="container">
	{@render children()}
</main>

<style>
	main {
		padding-bottom: var(--space-6);
	}
</style>
