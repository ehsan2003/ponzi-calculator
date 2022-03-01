<script lang="ts">
	export let links: string[];
</script>
<h3 class="my-5 text-2xl font-bold">
    در وب آموز (نیازمند فیلتر شکن برای مشاهده )
</h3>
<div class="flex flex-col">
	{#each links.map((u) => new URL(u)) as link}
		<div class="my-2">
			<script
				async
				src="https://telegram.org/js/telegram-widget.js?15"
				data-telegram-post={link.pathname}
				data-width="100%"></script>
		</div>
	{/each}
</div>
