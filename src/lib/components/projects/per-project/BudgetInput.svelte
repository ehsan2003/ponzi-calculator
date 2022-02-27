<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatcher = createEventDispatcher<{ go: number }>();
	let isBudgetValid = false;
	let budget: number;
	$: isBudgetValid = !!budget;
	let isFirstClicked = false;
	function handleGo() {
		isFirstClicked = true;
		if (budget) {
			dispatcher('go', budget);
		}
	}
</script>

<div
	class="flex flex-col md:flex-row justify-between items-center max-h-[100vh] md:max-h-auto my-32"
>
	<div class="md:basis-5/12 max-w-xs text-4xl">
		به نظرت با این سود توی چند وقت میتونی پول دار بشی‌؟
	</div>
	<div class="flex flex-col justify-center items-center md:py-0 py-10">
		<span class="w-[3px] h-12  bg-gray-400 rounded-md hidden md:block" />
		<span class="h-[3px] w-12  bg-gray-400 rounded-md block md:hidden" />
	</div>
	<div class="md:basis-5/12 flex flex-col justify-center items-center md:items-start ">
		<h1 class="md:text-4xl text-3xl font-thin">
			با چقدر پول <br /> استارت بزنی خوبه‌؟
		</h1>
		<div class="flex mt-3 w-64">
			<div class="flex rounded-md overflow-hidden ml-1 w-full ">
				<input
					type="text"
					class="block w-3/4 border-black border rounded-r-md pr-2 "
					style="box-sizing: border-box;"
					placeholder="سرمایه اولیه به دلار"
					bind:value={budget}
					class:placeholder:text-red-600={!isBudgetValid && isFirstClicked}
					class:text-red-600={!isBudgetValid && isFirstClicked}
					class:bg-red-100={!isBudgetValid && isFirstClicked}
				/>
				<span class="font-thin bg-black w-1/4 flex items-center justify-center text-white"
					><span>$</span></span
				>
			</div>
			<button class="bg-black rounded-md  text-white px-3 py-1" on:click={handleGo}>بریم</button>
		</div>
	</div>
</div>
