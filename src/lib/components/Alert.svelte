<script lang="ts">
	import Alert from 'svelte-material-icons/Alert.svelte';
</script>

<div class="flex bg-red-600 text-white rounded-xl w-full text-2xl p-5 py-7">
	<div class="flex items-center justify-center pl-5 text-4xl">
		<Alert />
	</div>
	<h3 class="">
		<slot />
	</h3>
</div>
