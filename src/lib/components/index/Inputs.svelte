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

	$: bonusInvalid = !bonus || bonus <= 0;
	$: initialBudgetInvalid = !initialBudget || initialBudget <= 0;

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

<div class="flex flex-col gap-y-1 w-64 mt-5">
	<div class="flex rounded-[4px] overflow-hidden">
		<div class="border border-black  w-[71%]">
			<input
				type="number"
				min="0"
				bind:value={bonus}
				class="block w-full rounded-r-[4px] placeholder:text-sm h-7   px-2 transition-colors placeholder:transition-colors outline-none"
				class:placeholder:text-red-600={bonusInvalid && isFirstClicked}
				class:text-red-600={bonusInvalid && isFirstClicked}
				class:bg-red-100={bonusInvalid && isFirstClicked}
				placeholder="درصد سود"
			/>
		</div>
		<div class=" w-[29%]">
			<select
				class="bg-black rounded-none  text-white px-2 h-full w-full block text-center text-sm tracking-wide"
				name=""
				id=""
				bind:value={bonusDuration}
			>
				{#each timeUnits as unit}
					<option value={unit.days}>{unit.label}</option>
				{/each}
			</select>
		</div>
	</div>

	<div class="flex items-stretch rounded-[4px] overflow-hidden">
		<div class="border border-black w-[71%]">
			<input
				type="number"
				min="0"
				class="block  outline-none rounded-r-[4px] placeholder:text-sm h-7 w-full px-2 transition-colors placeholder:transition-colors"
				placeholder="سرمایه ورودی به دلار"
				class:placeholder:text-red-600={initialBudgetInvalid && isFirstClicked}
				class:text-red-600={initialBudgetInvalid && isFirstClicked}
				class:bg-red-100={initialBudgetInvalid && isFirstClicked}
				bind:value={initialBudget}
			/>
		</div>
		<div
			class="bg-black w-[29%]  text-white px-2 text-center text-sm tracking-wide flex items-center justify-center font-mono font-bold"
		>
			<span>$</span>
		</div>
	</div>

	<button
		on:click={handleGo}
		class="col-span-2 text-cente bg-black rounded-md text-white py-1 text-lg">بزن بریم</button
	>
</div>
