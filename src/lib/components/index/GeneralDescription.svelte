<script lang="ts">
	import { getUnitName } from '$lib/time-units';
	import { onMount } from 'svelte';
	let element: HTMLElement;

	export let dailyProfit: number;
	export let unit: number;
	onMount(() => {
		setTimeout(() => window.scrollTo({ behavior: 'smooth', top: element.offsetTop }), 450);
	});
</script>

<div bind:this={element} />
<div class="bg-black rounded-xl w-full py-5 text-white flex items-center ">
	<h3 class="text-2xl font-bold px-5 leading-10">
		این پروژه به شما
		{((dailyProfit ** unit - 1) * 100).toFixed(2)}
		درصد سود
		{getUnitName(unit)}
		میده یعنی مدت زمانی که لازمه پول شما ده برابر بشه‌
		<span class="px-2 mx-1 bg-white text-black rounded-lg">
			{Math.floor(Math.log(10) / Math.log(dailyProfit))}
		</span>
		روزه
		<br />
		<p class="text-center mt-2">برای رسیدن به این مقادیر شما باید :</p>
	</h3>
</div>
