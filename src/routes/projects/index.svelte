<script lang="ts">
	/* eslint-disable  @typescript-eslint/no-explicit-any */
	import SearchInputs from '../../lib/components/projects/SearchInputs.svelte';

	import { browser } from '$app/env';
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { getStores } from '$app/stores';
	import type { TinyProjectDefinitionServer } from '$lib/projects-data';
	const { navigating, page } = getStores();
	import { tinyFromServer } from '$lib/projectMethods';
	import InfiniteScroll from '$lib/components/InfiniteScroll.svelte';

	export let total: number;
	export let result: TinyProjectDefinitionServer[];
	$: projects = result.map(tinyFromServer);
	let query = {
		search: '',
		onlyActive: false,
		sort: 'profit',
		order: 'desc' as 'desc' | 'asc',
		skip: 0,
		limit: 10,
		...Object.fromEntries($page.url.searchParams)
	};

	$: setQuery(query);
	function setQuery(query: Record<string, any>): void {
		if (browser)
			goto(`/projects?${prepareQuery(query)}`, {
				keepfocus: true,
				replaceState: true
			});
	}

	async function loadMore() {
		const newQuery = { ...query };
		newQuery.skip = projects.length;
		const response = await fetch(`/projects?${prepareQuery(newQuery)}`, {
			headers: { accept: 'application/json' }
		}).then((e) => e.json());

		projects = [...projects, ...response.result.map(tinyFromServer)];
	}

	function prepareQuery<T extends Record<string, any>>(obj: T): URLSearchParams {
		return new URLSearchParams({
			...Object.fromEntries(Object.entries(obj).filter(([, value]) => value))
		} as any);
	}
</script>

<h2 class="text-3xl font-bold text-center my-5 mb-10">لیست پروژه های کلاه برداری پانزی</h2>
<SearchInputs
	bind:order={query.order}
	bind:onlyActive={query.onlyActive}
	bind:sort={query.sort}
	bind:search={query.search}
/>

<div class="flex flex-col transition-opacity " class:opacity-40={$navigating}>
	{#each projects as project (project.slug)}
		<a
			href="/projects/{project.slug}"
			transition:fade|local
			animate:flip
			class="bg-white border border-black rounded-[4px] w-full grid p-3 my-1 grid-cols-[4fr_1fr] grid-rows-1 "
		>
			<div class="sm:col-span-1 col-span-2">
				<span class="float-left">
					<span class="text-xs rounded-md bg-black text-white   px-1">
						{project.profitText}
					</span>
					<span class="text-xs rounded-md bg-zinc-300 px-1">
						شروع : {project.startDate.toLocaleDateString('fa-IR', {
							day: 'numeric',
							month: 'short',
							year: 'numeric'
						})}
					</span>
					{#if !project.endDate}
						<span class="text-xs rounded-md bg-red-600 text-white px-1">فعال</span>
					{/if}
				</span>
				<h3 class="text-xl mb-3">
					{project.name}
				</h3>
				<p class=" text-sm">
					{project.shortDescription}
				</p>
				<ul class="flex mt-2">
					{#each project.tags as tag}
						<li class="ml-1 bg-black text-white rounded-md px-2 text-sm">
							{tag}
						</li>
					{/each}
				</ul>
			</div>
			<div class="justify-center items-center sm:flex hidden">
				<img
					src={project.logo}
					alt="logo of{project.name}"
					class="w-16 h-16 rounded-full object-contain mr-2 grayscale"
				/>
			</div>
		</a>
	{/each}
	<InfiniteScroll on:loadMore={loadMore} hasMore={0 < total - projects.length} />
</div>
