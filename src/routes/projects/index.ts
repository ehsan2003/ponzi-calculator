import { ProjectDefinitionToTiny } from '$lib/projectMethods';
import { data } from '$lib/projects-data';

import * as Joi from 'joi';

interface Query {
	search?: string;
	skip: number;
	limit: number;
	sort: 'name' | 'startDate' | 'timeAlive' | 'bonus';
	order: 'asc' | 'desc';
	onlyActive: boolean;
	tag?: string;
	tiny: boolean;
}

const schema = Joi.object({
	search: Joi.string(),
	skip: Joi.number().min(0).default(0),
	limit: Joi.number().min(1).max(100).default(10),
	sort: Joi.string().valid('name', 'startDate', 'bonus', 'timeAlive').default('bonus'),
	order: Joi.string().valid('asc', 'desc').default('desc'),
	onlyActive: Joi.boolean().default(false),
	tiny: Joi.boolean().default(true)
}).options({ stripUnknown: true });

export const get = ({ url }: { url: URL }) => {
	const { error, value } = schema.validate(
		Object.fromEntries([...url.searchParams.entries()].filter(([, v]) => v))
	);

	if (error) {
		console.log(error);

		return {
			status: 400,
			body: {
				error: error.message
			}
		};
	}
	const { search, skip, limit, sort, order, onlyActive, tag, tiny } = value as Query;
	let total = data
		.filter(({ endDate }) => {
			if (onlyActive) {
				return !endDate;
			} else {
				return true;
			}
		})
		.filter(({ tags }) => !tag || tags.includes(tag))
		.filter(
			({ name, description }) =>
				!search ||
				name.toLowerCase().includes(search.toLowerCase()) ||
				description.toLowerCase().includes(search.toLowerCase())
		)
		.sort((a, b): number => {
			switch (sort) {
				case 'name':
					return a.name.localeCompare(b.name);
				case 'startDate':
					return a.startDate.localeCompare(b.startDate);
				case 'timeAlive':
					return (
						timeBetween(a.startDate, a.endDate || new Date()) -
						timeBetween(b.startDate, b.endDate || new Date())
					);
				case 'bonus':
					return a.dailyBonus - b.dailyBonus;
			}
		});
	if (order === 'desc') {
		total = total.reverse();
	}
	const result = total
		.slice(skip, skip + limit)
		.map((o) => (tiny ? ProjectDefinitionToTiny(o) : o));

	return {
		status: 200,
		body: {
			result,
			total: total.length
		}
	};
};
function timeBetween(start: Date | string, end: Date | string) {
	return new Date(end).getTime() - new Date(start).getTime();
}
