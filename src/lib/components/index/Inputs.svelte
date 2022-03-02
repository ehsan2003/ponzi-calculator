<script context="module" lang="ts">
	export type InputValues = { dailyBonus: number; initialBudget: number; timeUnit: number };
</script>

<script lang="ts">
	import { timeUnits } from '$lib/time-units';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{ 'inputs-change': InputValues }>();

	let bonus: number | null;
	let initialBudget: number | null;
	let bonusDuration = 30;

	let isFirstClicked = false;
	let bonusInvalid = false;
	let initialBudgetInvalid = false;

	$: bonusInvalid = !bonus;
	$: initialBudgetInvalid = !initialBudget;

	function handleGo() {
		isFirstClicked = true;
		if (bonus && initialBudget && bonus < Infinity && initialBudget < Infinity) {
			dispatch('inputs-change', {
				dailyBonus: (1 + bonus / 100) ** (1 / bonusDuration),
				initialBudget,
				timeUnit: bonusDuration
			});
		}
	}
</script>

<div class="grid grid-cols-[5fr_2fr] gap-y-1 w-64 mt-5 items-stretch">
	<div class="border border-black  rounded-r-[4px] overflow-hidden">
		<input
			type="number"
			min="0"
			bind:value={bonus}
			class="block w-full  placeholder:text-sm h-7  px-2 transition-colors placeholder:transition-colors outline-none"
			class:placeholder:text-red-600={bonusInvalid && isFirstClicked}
			class:text-red-600={bonusInvalid && isFirstClicked}
			class:bg-red-100={bonusInvalid && isFirstClicked}
			placeholder="درصد سود"
		/>
	</div>
	<div class="rounded-l-[4px] overflow-hidden">
		<select
			class="bg-black  text-white px-2 h-full w-full block text-center text-sm tracking-wide"
			name=""
			id=""
			bind:value={bonusDuration}
		>
			{#each timeUnits as unit}
				<option value={unit.days}>{unit.label}</option>
			{/each}
		</select>
	</div>

	<div class="border border-black  rounded-r-[4px] overflow-hidden ">
		<input
			type="number"
			min="0"
			class="block  outline-none w-full placeholder:text-sm h-7  px-2 transition-colors placeholder:transition-colors"
			placeholder="سرمایه ورودی به دلار"
			class:placeholder:text-red-600={initialBudgetInvalid && isFirstClicked}
			class:text-red-600={initialBudgetInvalid && isFirstClicked}
			class:bg-red-100={initialBudgetInvalid && isFirstClicked}
			bind:value={initialBudget}
		/>
	</div>
	<div
		class="bg-black  text-white px-2 h-full w-full text-center text-sm tracking-wide rounded-l-[4px] overflow-hidden flex items-center justify-center font-mono font-bold"
	>
		<span>$</span>
	</div>

	<button
		on:click={handleGo}
		class="col-span-2 text-cente bg-black rounded-md text-white py-1 text-lg">بزن بریم</button
	>
</div>
