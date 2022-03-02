<script lang="ts">
	import type { Link } from '$lib/projects-data';
	export let links: Link[];
</script>

<h3 class="text-2xl font-bold text-center">پیوند ها</h3>
<ul class="my-5 mb-10">
	{#each links as link}
		<li class="my-2 border rounded-md px-2 py-2 flex">
			<h5 class="text-lg ml-auto">{link.name}</h5>
			{#if 'url' in link}
				<a
					href={link.url}
					class=" rounded-md bg-zinc-300 px-2  mr-2 text-sm flex items-center justify-center"
				>
					<span> لینک </span>
				</a>
			{/if}
			{#if 'archive' in link}
				<a
					href={link.archive}
					class=" rounded-md bg-zinc-300 px-2  mr-2 text-sm flex items-center justify-center"
				>
					<span> آرشیو </span>
				</a>
			{/if}
		</li>
	{/each}
</ul>
