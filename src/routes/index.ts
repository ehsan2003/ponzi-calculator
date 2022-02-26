import { data } from '$lib/projects-data';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = () => {
	console.dir(
		{
			status: 200,
			body: {
				projects: data
					.sort((a, b) => b.dailyProfit - a.dailyProfit)
					.slice(0, 3)
					.map(({ name, dailyProfit, slug, logo }) => ({ name, dailyProfit, slug, logo }))
			}
		},
		{ depth: null }
	);
	return {
		status: 200,
		body: {
			projects: data
				.sort((a, b) => b.dailyProfit - a.dailyProfit)
				.slice(0, 3)
				.map(({ name, dailyProfit, slug, logo }) => ({ name, dailyProfit, slug, logo }))
		}
	};
};
