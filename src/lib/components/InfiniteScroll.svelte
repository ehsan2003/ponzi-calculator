<script lang="ts">
	import { browser } from '$app/env';

	import { onMount, onDestroy, createEventDispatcher } from 'svelte';

	export let threshold = 0;
	export let horizontal = false;
	export let hasMore = true;

	const dispatch = createEventDispatcher();
	let isLoadMore = false;
	let component: HTMLDivElement;

	onMount(() => {
		browser && window.addEventListener('scroll', onScroll);
	});
	onDestroy(() => {
		browser && window.removeEventListener('scroll', onScroll);
	});
	const onScroll = () => {
		const offset = horizontal
			? document.documentElement.scrollWidth -
			  document.documentElement.clientWidth -
			  document.documentElement.scrollLeft
			: document.documentElement.scrollHeight -
			  document.documentElement.clientHeight -
			  document.documentElement.scrollTop;

		if (offset <= threshold) {
			if (!isLoadMore && hasMore) {
				dispatch('loadMore');
			}
			isLoadMore = true;
		} else {
			isLoadMore = false;
		}
	};
</script>

<div bind:this={component} style="width:0px" />
