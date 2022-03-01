import { data } from '$lib/projects-data';

export const get = ({ params }) => {
	const slug = params.slug.toLowerCase();
	const found = data.find((project) => project.slug === slug);
	if (found) {
		return {
			body: {
				project: found
			}
		};
	} else {
		return { fallthrough: true };
	}
};
