<script lang="ts" context="module">
	import type { ErrorLoad } from '@sveltejs/kit';

	export const load: ErrorLoad = ({ status, error }) => {
		if (status === 404) {
			return {
				status: 302,
				redirect: '/'
			};
		}
		return { status, error };
	};
</script>

<script lang="ts">
	export let status: number;
</script>

{#if status === 404}
	<h1 class="text-center tracking-[5px] font-mono text-3xl text-gray-400 py-4  md:block hidden">
		404 پیدا نشد :()
	</h1>
{:else}
	<h3>مشکلی پیش آمده دوباره امتحان کنید :(</h3>
{/if}
