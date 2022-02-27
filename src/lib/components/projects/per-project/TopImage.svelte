<script lang="ts">
	export let mainImageAlt: string;
	export let mainImage: string;
	export let name: string;
	export let profitText: string;
	export let shortDescription: string;
	export let tags: string[];
</script>

<div class="sm:mt-5 mt-0 mb-12 grid grid-cols-1 grid-rows-1">
	<img
		src={mainImage}
		alt={mainImageAlt}
		class="grayscale  rounded-3xl block col-start-1 row-start-1"
	/>

	<div class="col-start-1 row-start-1 z-10 flex items-end justify-start">
		<div
			class="bg-gradient-to-r from-transparent to-[rgba(0,0,0,.4)] mb-5 text-white pr-5  py-3 w-72 "
		>
			<div id="short-desc">
				<span class="float-left p-1 px-2 text-sm rounded-md bg-zinc-200 text-black">
					{profitText}
				</span>
				<h1 class="text-2xl">
					{name}
				</h1>

				<p class="truncate mt-2">
					{shortDescription}
				</p>
				<div class="flex text-xs mt-2">
					{#each tags as tag}
						<span class="inline-block bg-black  px-2 py-1 rounded-md ml-2">
							{tag}
						</span>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes slideLeft {
		from {
			transform: translateX(-20px);
			opacity: 0;
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}
	#short-desc {
		animation: slideLeft 200ms ease-in;
	}
</style>
