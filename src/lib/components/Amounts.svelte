<script lang="ts">
	import { data } from '$lib/amounts';
	import { formatTime } from '$lib/relative-time-formatter';
	export let dailyBonus: number;
	export let initialBudget: number;
	function calculateTimeRequiredInSeconds(
		amount: number,
		dailyBonus: number,
		initialBudget: number
	) {
		const days = Math.log(amount / initialBudget) / Math.log(dailyBonus);
		return days * 24 * 60 * 60;
	}
</script>

<div class="flex flex-col items-stretch my-5 justify-center">
	{#each data
		.filter((e) => e.amount > initialBudget)
		.sort((a, b) => b.amount - a.amount) as { amount, image, title }}
		<div
			class="grid  grid-cols-1 sm:grid-cols-[150px_320px_150px] my-5 justify-center group grid-rows-1"
		>
			<div
				class="w-full h-full justify-center items-center group-even:col-start-3 group-even:col-end-4 hidden sm:flex"
			>
				<img src={image} alt="usa flag" class="h-20 w-20 rounded-full grayscale" />
			</div>
			<div
				class="border border-black rounded-lg sm:w-80 text-center sm:col-start-2 sm:col-end-3 row-start-1 row-end-2 p-3 col-span-2"
			>
				<h5 class="text-lg font-bold my-2">{title}</h5>
				<p class="text-red-600 my-2 text-sm">${amount.toLocaleString()}</p>
				<p class="font-thin my-2">
					مدت زمان رسیدن با این پروژه :{formatTime(
						calculateTimeRequiredInSeconds(amount, dailyBonus, initialBudget)
					)}
				</p>
			</div>
		</div>
	{/each}
</div>
