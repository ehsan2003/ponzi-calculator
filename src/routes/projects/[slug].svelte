<script lang="ts">
	import TopImage from '$lib/components/projects/per-project/TopImage.svelte';

	import LogicBehindPonzi from '$lib/components/projects/per-project/LogicBehindPonzi.svelte';

	import Danger from '$lib/components/projects/per-project/Danger.svelte';

	import Timeline from '$lib/components/projects/per-project/Timeline.svelte';

	import type { ProjectDefinitionServer } from '$lib/projects-data';

	import WhatIsPonzi from '$lib/components/index/WhatIsPonzi.svelte';
	import ItReallyPays from '$lib/components/projects/per-project/ItReallyPays.svelte';
	import ProjectAlert from '$lib/components/projects/per-project/ProjectAlert.svelte';
	import { ProjectDefFromServer } from '$lib/projectMethods';
	import OnWebamooz from '$lib/components/projects/per-project/OnWebamooz.svelte';

	export let project: ProjectDefinitionServer;

	$: projectDef = ProjectDefFromServer(project);

	let budget: number | undefined;
	let element: HTMLElement;
	$: element && budget && element.scrollIntoView({ behavior: 'smooth' });
</script>

<svelte:head>
	<title>کلاه برداری {projectDef.name}</title>
	<meta name="description" content={projectDef.shortDescription} />
	<meta name="keywords" value="پانزی, کلاه برداری , دزدی , {projectDef.name}" />
</svelte:head>
<TopImage
	mainImageAlt={projectDef.mainImageAlt}
	mainImage={projectDef.mainImage}
	name={projectDef.name}
	profitText={projectDef.profitText}
	shortDescription={projectDef.shortDescription}
	tags={projectDef.tags}
/>
<div class="my-5">
	{@html projectDef.description}
</div>

<ProjectAlert name={projectDef.name} />
{#if projectDef.timeline.length}
	<Timeline isFinished={!!projectDef.endDate} name={project.name} timeline={projectDef.timeline} />
{/if}

<br />
{#if projectDef.onWebamooz && projectDef.onWebamooz.length}
	<OnWebamooz links={projectDef.onWebamooz.map(({ url }) => url)} />
{/if}

<LogicBehindPonzi dailyProfit={projectDef.dailyProfit} />
<WhatIsPonzi />
{#if projectDef.victimCountEstimate && projectDef.scamEstimate}
	<Danger victimEstimate={projectDef.victimCountEstimate} scamEstimate={projectDef.scamEstimate} />
{/if}
<ItReallyPays />
