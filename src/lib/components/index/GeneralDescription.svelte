<script lang="ts">
	import { getUnitName } from '$lib/time-units';
	let element: HTMLElement;
	import { fade } from 'svelte/transition';
	import BlackBox from '../BlackBox.svelte';
	export let dailyBonus: number;
	export let unit: number;

	export function scrollIntoView() {
		element.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<div bind:this={element} />
<BlackBox>
	{#key dailyBonus}
		<h3
			transition:fade
			class="text-2xl font-bold px-5 leading-10 col-start-1 col-end-2 row-start-1 row-end-2"
		>
			این پروژه به شما
			{((dailyBonus ** unit - 1) * 100).toFixed(2)}
			درصد سود
			{getUnitName(unit)}
			میده یعنی مدت زمانی که لازمه پول شما ده برابر بشه‌
			<span class="px-2 mx-1 bg-white text-black rounded-lg">
				{Math.floor(Math.log(10) / Math.log(dailyBonus))}
			</span>
			روزه
			<br />
			<p class="text-center mt-2">برای رسیدن به این مقادیر شما باید :</p>
		</h3>
	{/key}
</BlackBox>
