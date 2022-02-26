<script lang="ts">
	import Instagram from 'svelte-material-icons/Instagram.svelte';
	import Telegram from 'svelte-material-icons/Telegram.svelte';
	import Twitter from 'svelte-material-icons/Twitter.svelte';
</script>

<div>
	<div class="flex items-center">
		<h4 class="sm:text-xl text-lg ml-4">وب آموز را در شبکه های اجتماعی دنبال کنید</h4>
		<hr class="h-[4px] bg-slate-5000 my-5 mx-auto grow-[1]" />
	</div>
	<div class="grid grid-cols-3 sm:gap-10 gap-4 justify-center items-center mt-4">
		<a class="group" href="https://www.instagram.com/m.jorjandi">
			<div
				class="w-full group-hover:bg-zinc-200 sm:rounded-2xl rounded-full  border border-black flex items-center justify-center aspect-square sm:text-5xl text-3xl"
			>
				<Instagram />
			</div>
			<p class="sm:tracking-widest text-sm sm:text-md uppercase  text-center  mt-2 font-mono">
				Instagram
			</p>
		</a>
		<a class="group" href="https://t.me/webamoozir">
			<div
				class="w-full group-hover:bg-zinc-200 sm:rounded-2xl rounded-full  border border-black flex items-center justify-center aspect-square sm:text-5xl text-3xl"
			>
				<Telegram />
			</div>
			<p class="sm:tracking-widest text-sm sm:text-md uppercase  text-center  mt-2 font-mono">
				Telegram
			</p>
		</a>
		<a class="group" href="https://twitter.com/idnajroj">
			<div
				class="w-full group-hover:bg-zinc-200 sm:rounded-2xl rounded-full  border border-black flex items-center justify-center aspect-square sm:text-5xl text-3xl"
			>
				<Twitter />
			</div>
			<p class="sm:tracking-widest text-sm sm:text-md uppercase  text-center  mt-2 font-mono">
				Twitter
			</p>
		</a>
	</div>
</div>
