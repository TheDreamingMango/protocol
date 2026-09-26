import { error } from '@sveltejs/kit';
import { getGuide, guides } from '$lib/content';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => guides.map(({ slug }) => ({ slug }));

export const load: PageLoad = ({ params }) => {
	const guide = getGuide(params.slug);
	if (!guide) error(404, 'Not found');
	return { guide };
};
