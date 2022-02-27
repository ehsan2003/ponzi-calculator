<script lang="ts">
	import SocialMedia from '../lib/components/index/SocialMedia.svelte';

	import Alert from '../lib/components/index/Alert.svelte';

	import Amounts from '../lib/components/Amounts.svelte';

	import Logical from '../lib/components/index/Logical.svelte';

	import BetterProjects from '$lib/components/index/BetterProjects.svelte';

	import Messanger from '$lib/components/index/Messanger.svelte';
	import WhatIsPonzi from '$lib/components/index/WhatIsPonzi.svelte';
	import GeneralDescription from '$lib/components/index/GeneralDescription.svelte';

	import type { InputValues } from '$lib/components/index/Inputs.svelte';
	import type { TinyProjectDefinition } from '$lib/projects-data';
	export let projects: TinyProjectDefinition[];
	let scroller: GeneralDescription | undefined;
	import { fly } from 'svelte/transition';
	let inputs: InputValues | undefined;

	$: inputs && scroller && setTimeout(() => scroller.scrollIntoView(), 450);
</script>

<div class="text-center tracking-[5px] font-mono text-3xl text-gray-400 py-4  md:block hidden">
	××××
</div>
<Messanger on:inputs-change={(e) => (inputs = e.detail)} />

{#if inputs}
	<div transition:fly={{ y: 200, duration: 400 }}>
		<GeneralDescription
			dailyProfit={inputs.dailyProfit}
			unit={inputs.timeUnit}
			bind:this={scroller}
		/>
		<br />
		<Amounts dailyProfit={inputs.dailyProfit} initialBudget={inputs.initialBudget} />
		<Logical />
		<hr class="w-4/5 h-[2px] bg-slate-500 my-8 mx-auto" />
		{#if inputs.dailyProfit > 1.0016276620118332 && projects.every((p) => p.dailyProfit > inputs.dailyProfit)}
			<BetterProjects defs={projects} timeUnit={inputs.timeUnit} />
		{/if}
		<Alert dailyProfit={inputs.dailyProfit} />
		<WhatIsPonzi />
		<SocialMedia />
	</div>
{/if}

<br />
