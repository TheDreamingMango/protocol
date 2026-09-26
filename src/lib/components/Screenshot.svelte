<script lang="ts">
	import type { Picture } from '@sveltejs/enhanced-img';

	type Name = 'slide-01' | 'slide-02' | 'slide-03' | 'slide-04' | 'strip';

	let { name, alt }: { name: Name; alt: string } = $props();

	const images = import.meta.glob<Picture>('/store-screenshots/iphone-6.9/*.png', {
		eager: true,
		query: { enhanced: true },
		import: 'default'
	});

	const src = $derived(images[`/store-screenshots/iphone-6.9/${name}.png`]);
</script>

<figure>
	<enhanced:img {src} {alt} sizes="(min-width: 700px) 320px, 80vw" />
</figure>

<style>
	figure {
		margin: var(--space-4) 0;
		text-align: center;
	}

	figure :global(img) {
		max-width: 320px;
		width: 100%;
		height: auto;
		border-radius: var(--radius);
	}
</style>
