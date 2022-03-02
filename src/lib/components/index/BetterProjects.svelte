<script lang="ts">
	import type { TinyProjectDefinition } from '$lib/projects-data';

	export let defs: TinyProjectDefinition[];
</script>

<h2 class="text-2xl font-bold text-center mt-10">
	میخوای سرمایه گذاری کنی ؟<br /> جای بهتر سرمایه گذاری کن
</h2>
<div class="flex my-10 sm:flex-row flex-col">
	<div class="sm:text-4xl text-2xl font-bold flex items-center justify-center">
		پروژه
		<br />
		های پانزی
		<br />
		با سود بهتر ...!؟
	</div>
	<div class="flex flex-col sm:items-end items-center  mt-5 sm:mt-0  grow-[1]">
		{#each defs as { name, dailyBonus, slug, logo, bonusText }}
			<a
				href="/projects/{slug}"
				class="grid grid-cols-[5fr_3fr] grid-rows-[4fr_1fr] bg-black justify-start rounded-lg max-w-xs h-32 my-2 p-4 gap-x-4 gapy-1"
			>
				<h3 class="text-white font-bold text-xl flex items-center">
					<span>{name}</span>
				</h3>
				<div class="justify-center flex items-center col-start-2 col-end-3 row-start-1 row-end-3 ">
					<img src={logo} alt="" class="rounded-full grayscale blur-sm " />
				</div>
				<div class="flex items-center  ">
					<button class="bg-white text-black rounded-sm px-2 py-1 text-xs mt-3 mb-2 ">
						بیشـتـــر ...
					</button>
				</div>
				<div
					class="col-start-2 col-end-3 row-start-1 row-end-3 z-10 text-white flex items-center justify-center font-bold text-lg text-center shadowed-text "
				>
					<span>
						{bonusText}
					</span>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	.shadowed-text {
		text-shadow: 3px 2px 3px rgba(0, 0, 0, 0.5);
	}
</style>
