<script lang="ts">
	import Inputs from './Inputs.svelte';
	import { onMount } from 'svelte';
	import { typewriter } from '$lib/transitions/typewriter-single';

	let init = false;

	onMount(() => {
		init = true;
	});
</script>

<div
	class="flex flex-col md:flex-row justify-between mb-12 mt-5 items-center max-h-[100vh] md:max-h-auto"
>
	<div class="md:basis-5/12 max-w-xs">
		<div
			class="float-left text-justify px-2 py-3 max-w-[80%] bg-zinc-200 my-2 rounded-2xl shadow-lg  rounded-tl-none"
		>
			سلام ممد <br /> چطوری رفیق قدیمی
		</div>
		<div
			class="float-left text-justify px-2 py-3 max-w-[80%] bg-zinc-200 my-2 rounded-2xl shadow-lg  rounded-tl-none"
		>
			ببین یه پروژه هست عالیه باورت نمیشه هر ماه ۳۵ درصد سود میده گفتم کمکی بهت کنم تو یه سال زندگیت
			از این رو به اون رو بشه
		</div>
		<div
			class="float-left text-justify px-2 py-3 max-w-[80%] bg-zinc-200 my-2 rounded-2xl shadow-lg  rounded-tl-none"
		>
			وایسا لینکشو بفرستم
		</div>
	</div>
	<div class="flex flex-col justify-center items-center md:py-0 py-10">
		<span class="w-[3px] h-12  bg-gray-400 rounded-md hidden md:block" />
		<span class="h-[3px] w-12  bg-gray-400 rounded-md block md:hidden" />
	</div>
	<div class="md:basis-5/12 flex flex-col justify-center items-center md:items-start ">
		{#if init}
			<!--  prettier-ignore -->
			<h1
				in:typewriter={{perCharDuration:60}}
				class="md:text-4xl text-3xl font-thin whitespace-pre-line"
			>
				جدیدا        
				از این پیاما گرفتی؟
			</h1>
		{/if}
		<Inputs on:inputs-change />
	</div>
</div>
