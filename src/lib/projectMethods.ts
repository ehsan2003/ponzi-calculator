import type {
	ProjectDefinition,
	ProjectDefinitionServer,
	TinyProjectDefinition,
	TinyProjectDefinitionServer
} from '/home/ehsan/programming/ponzi-calculator-new/src/lib/projects-data';

export function ProjectDefinitionToTiny({
	name,
	dailyBonus,
	slug,
	logo,
	bonusText,
	shortDescription,
	tags,
	endDate,
	startDate
}: ProjectDefinitionServer): TinyProjectDefinitionServer {
	return {
		name,
		dailyBonus: dailyBonus,
		slug,
		logo,
		bonusText,
		shortDescription,
		tags,
		endDate,
		startDate
	};
}

export function ProjectDefFromServer(project: ProjectDefinitionServer): ProjectDefinition {
	const startDate = new Date(project.startDate);
	const endDate = (project.endDate && new Date(project.endDate)) || undefined;
	const timeAlive = startDate.getTime() - (endDate || new Date()).getTime();
	return {
		...project,
		startDate,
		endDate,
		timeAlive,
		totalProfit: project.dailyBonus ** (timeAlive / (1000 * 60 * 60 * 24)),
		timeline: project.timeline.map((t) => ({
			...t,
			date: new Date(t.date)
		}))
	};
}

export function tinyFromServer(server: TinyProjectDefinitionServer): TinyProjectDefinition {
	return {
		...server,
		endDate: server.endDate ? new Date(server.endDate) : undefined,
		startDate: new Date(server.startDate)
	};
}
