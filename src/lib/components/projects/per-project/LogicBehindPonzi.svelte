<script lang="ts">
	import BudgetInput from './BudgetInput.svelte';

	import Amounts from '$lib/components/Amounts.svelte';
	import Logical from '$lib/components/index/Logical.svelte';

	let budget: number | undefined;
	let element: HTMLElement;
	export let dailyBonus: number;
	$: element && budget && element.scrollIntoView({ behavior: 'smooth' });
</script>

<BudgetInput on:go={(e) => (budget = e.detail)} />
{#if budget}
	<div bind:this={element} />
	<Amounts {dailyBonus} initialBudget={budget} />
	<Logical />
{/if}
