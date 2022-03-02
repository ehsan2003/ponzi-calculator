<script lang="ts">
	import Alert from 'svelte-material-icons/Alert.svelte';
	export let dailyBonus: number;
</script>

<div class="flex bg-red-600 text-white rounded-xl w-full text-2xl p-5 py-7">
	<div class="flex items-center justify-center pl-5 text-4xl">
		<Alert />
	</div>
	<h3 class="">
		هشدار!
		<br />
		{#if dailyBonus > 1.0016276620118332}
			آنچه به شما معرفی شده به احتمال ۱۱۰ درصد کلاه برداری پانزی است!
		{:else}
			آنچه به شما معرفی شده احتمال کلاه برداری پانزی دارد
		{/if}
	</h3>
</div>
