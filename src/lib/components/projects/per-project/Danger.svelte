<script lang="ts">
	import Skull from 'svelte-material-icons/Skull.svelte';
	import Dollar from 'svelte-material-icons/CurrencyUsd.svelte';

	export let victimEstimate: string;
	export let scamEstimate: string;
</script>

<div class="bg-black flex py-10 -mx-4 ">
	<div class="grow-[1] flex justify-center items-center text-white flex-col">
		<div class="rounded-full  text-5xl bg-gray-900 p-8 mb-2">
			<Skull />
		</div>
		<p class="font-bold sm:text-xl">{victimEstimate} قربانی</p>
	</div>
	<div class="w-5 flex justify-center items-center">
		<span class="w-[2px] h-9 bg-gray-900" />
	</div>
	<div class="grow-[1] flex justify-center items-center text-white flex-col">
		<div class="rounded-full text-white text-5xl bg-gray-900 p-8 aspect-square mb-2">
			<Dollar />
		</div>
		<p class="font-bold sm:text-xl">{scamEstimate} کلاه برداری</p>
	</div>
</div>
