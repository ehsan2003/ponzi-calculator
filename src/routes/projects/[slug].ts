import { data } from '$lib/projects-data';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = ({ params }) => {
	const slug = params.slug.toLowerCase();
	const found = data.find((project) => project.slug === slug);
	if (found) {
		return {
			body: {
				project: found
			}
		};
	} else {
		return { status: 404, error: new Error('no page found') };
	}
};
