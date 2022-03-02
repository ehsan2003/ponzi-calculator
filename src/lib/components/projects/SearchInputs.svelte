<script lang="ts">
	import Search from 'svelte-material-icons/Magnify.svelte';

	export let search: string;
	export let onlyActive: boolean;
	export let sort: string;
	export let order: 'asc' | 'desc';
</script>

<div class="flex text-sm md:flex-row flex-col pb-10">
	<div
		class="rounded-full border border-black overflow-hidden grid grid-cols-[216px_40px] w-64 grid-rows-1 "
	>
		<input
			type="text"
			placeholder="متن جستجو ..."
			bind:value={search}
			class="px-2 col-start-1 col-span-2 row-start-1 block py-1 text-sm h-full"
		/>
		<div
			class="cols-start-2 col-end-3 row-start-1 pointer-events-none flex justify-center items-center"
		>
			<span class="text-xl"><Search /></span>
		</div>
	</div>

	<label class="md:mr-auto mt-3 md:mt-0 flex items-center">
		<input type="checkbox" class="ml-2" bind:checked={onlyActive} />
		فقط پروژه های فعال
	</label>
	<label class="md:mr-6 mt-3 md:mt-0">
		ترتیب:
		<select class="border mr-1 text-center rounded-md bg-zinc-200 py-1 w-32" bind:value={sort}>
			<option value="name">نام</option>
			<option value="startDate">تاریخ شروع </option>
			<option value="timeAlive">مدت فعالیت</option>
			<option value="bonus">درصد سود</option>
		</select>
		<select bind:value={order} class="border mr-1 text-center rounded-md bg-zinc-200 py-1 w-16">
			<option value="asc">سعودی</option>
			<option value="desc">نزولی</option>
		</select>
	</label>
</div>
