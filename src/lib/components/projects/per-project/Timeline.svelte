<script lang="ts">
	import type { TimelineElement } from '$lib/projects-data';
	import Link from 'svelte-material-icons/Link.svelte';
	import Archive from 'svelte-material-icons/Archive.svelte';
	export let timeline: TimelineElement[];
	export let isFinished: boolean;
	export let name: string;
</script>

<div class="mt-16">
	<h1 class="text-3xl text-center font-bold">
		خط زمانی {name}
	</h1>
	<br />
	{#each timeline as event}
		<div
			class="rounded-lg border border-black  overflow-hidden grid grid-cols-[1fr_140px] p-5 my-5"
		>
			<div class="col-span-2 sm:col-span-1">
				<p class="p-2 px-4 bg-zinc-100 rounded-xl float-left ">
					{event.date.toLocaleDateString('fa-IR', {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}
				</p>
				<h4 class="text-2xl mt-2">
					{event.title}
				</h4>
				{#if event.description} <p class="mt-3">{event.description}</p>{/if}
				{#if event.archivedLink || event.link}
					<div class="float-left mt-3">
						{#if event.link}
							<a
								href={event.link}
								class="p-2 mr-2 bg-zinc-100 rounded-xl float-left text-sm font-thin flex  items-center "
								><span class="pl-2">لینک </span><Link />
							</a>{/if}
						{#if event.archivedLink}
							<a
								href={event.archivedLink}
								class="p-2  bg-zinc-100 rounded-xl float-left text-sm font-thin flex  items-center "
							>
								<span class="pl-2">آرشیو</span>
								<Archive />
							</a>
						{/if}
					</div>
				{/if}
			</div>

			<div class="justify-center items-center h-full sm:flex hidden">
				<img
					src={event.image || '/logo-gray.png'}
					alt=""
					class="w-24 h-24 rounded-full grayscale"
				/>
			</div>
		</div>
	{/each}
	{#if isFinished}
		<div class="text-center">
			.
			<h4 class="text-xl">کلاه برداری هنوز ادامه دارد</h4>
			.<br />.<br />.<br />
		</div>
	{/if}
</div>
