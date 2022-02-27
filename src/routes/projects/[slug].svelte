<script lang="ts">
	import TopImage from '$lib/components/projects/per-project/TopImage.svelte';

	import LogicBehindPonzi from '$lib/components/projects/per-project/LogicBehindPonzi.svelte';

	import Danger from '$lib/components/projects/per-project/Danger.svelte';

	import Timeline from '$lib/components/projects/per-project/Timeline.svelte';

	import type { ProjectDefinition, ProjectDefinitionServer } from '$lib/projects-data';

	import WhatIsPonzi from '$lib/components/index/WhatIsPonzi.svelte';
	import ItReallyPays from '$lib/components/projects/per-project/ItReallyPays.svelte';
	import ProjectAlert from '$lib/components/projects/per-project/ProjectAlert.svelte';

	export let project: ProjectDefinitionServer;
	let projectDef: ProjectDefinition;
	$: startDate = new Date(project.startDate);
	$: endDate = project.endDate && new Date(project.endDate);
	$: timeAlive = startDate.getTime() - (endDate || new Date()).getTime();
	$: projectDef = {
		...project,
		startDate,
		endDate,
		timeAlive,
		totalProfit: project.dailyProfit ** (timeAlive / (1000 * 60 * 60 * 24)),
		timeline: project.timeline.map((t) => ({
			...t,
			date: new Date(t.date)
		}))
	};
	let budget: number | undefined;
	let element: HTMLElement;
	$: element && budget && element.scrollIntoView({ behavior: 'smooth' });
</script>

<TopImage {...projectDef} />
<div class="my-5">
	{@html projectDef.description}
</div>

<ProjectAlert name={projectDef.name} />
<Timeline isFinished={!!projectDef.endDate} name={project.name} timeline={projectDef.timeline} />
<br />

<LogicBehindPonzi dailyProfit={projectDef.dailyProfit} />
<WhatIsPonzi />

<Danger victimEstimate={projectDef.victimCountEstimate} scamEstimate={projectDef.scamEstimate} />
<ItReallyPays />
