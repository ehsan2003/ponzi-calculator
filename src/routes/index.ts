import { data } from '$lib/projects-data';
import type { RequestHandler } from '@sveltejs/kit';
import { ProjectDefinitionToTiny } from '../lib/projectMethods';

export const get: RequestHandler = () => {
	return {
		status: 200,
		body: {
			projects: data
				.sort((a, b) => b.dailyBonus - a.dailyBonus)
				.slice(0, 3)
				.map(ProjectDefinitionToTiny)
		}
	};
};
