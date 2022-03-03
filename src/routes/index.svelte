<script lang="ts">
	import SocialMedia from '../lib/components/index/SocialMedia.svelte';

	import Alert from '../lib/components/Alert.svelte';

	import Amounts from '../lib/components/Amounts.svelte';

	import Logical from '../lib/components/index/Logical.svelte';

	import BetterProjects from '$lib/components/index/BetterProjects.svelte';

	import Messanger from '$lib/components/index/Messanger.svelte';
	import WhatIsPonzi from '$lib/components/index/WhatIsPonzi.svelte';
	import GeneralDescription from '$lib/components/index/GeneralDescription.svelte';

	import type { InputValues } from '$lib/components/index/Inputs.svelte';
	import type { TinyProjectDefinition } from '$lib/projects-data';
	export let projects: TinyProjectDefinition[];
	let scroller: GeneralDescription;
	import { fly } from 'svelte/transition';
	let inputs: InputValues;

	$: inputs && scroller && setTimeout(() => scroller.scrollIntoView(), 450);
</script>

<svelte:head>
	<title>پانزی</title>
	<meta
		name="description"
		value="پانزی شیوه ی کلاه برداریی که چارلز پانزی سال ۱۹۱۹ ابدا کرد کماکان دامن گیر مردم است"
	/>
</svelte:head>
<div class="text-center tracking-[5px] font-mono text-3xl text-gray-400 py-4  md:block hidden">
	××××
</div>
<Messanger on:inputs-change={(e) => (inputs = e.detail)} />

{#if inputs}
	<div transition:fly={{ y: 200, duration: 400 }}>
		<GeneralDescription
			dailyBonus={inputs.dailyBonus}
			unit={inputs.timeUnit}
			bind:this={scroller}
		/>
		<br />
		<Amounts dailyBonus={inputs.dailyBonus} initialBudget={inputs.initialBudget} />
		<Logical />
		<hr class="w-4/5 h-[2px] bg-slate-500 my-8 mx-auto" />
		{#if inputs.dailyBonus > 1.0016276620118332 && projects.every((p) => p.dailyBonus > inputs.dailyBonus)}
			<BetterProjects defs={projects} />
		{/if}
		<Alert>
			هشدار!
			<br />
			آنچه به شما معرفی شده به احتمال ۱۱۰ درصد کلاه برداری پانزی است! آنچه به شما معرفی شده احتمال
			کلاه برداری پانزی دارد
		</Alert>
		<WhatIsPonzi />
		<SocialMedia />
	</div>
{/if}

<br />
