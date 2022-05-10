<script>
	import { navigating } from '$app/stores';
	import Github from 'svelte-material-icons/GithubCircle.svelte';
	import '../app.css';
</script>

<svelte:head>
	<meta name="description" value="ترفند پانزی یک عملیات سرمایه‌گذاری کلاه‌بردارانه است" />
	<meta name="google-site-verification" content="CwAg5MbRQOBWFsK4HIlFPZZEy4_cp-X-Fkx6WGhyEZ4" />
</svelte:head>
<div
	class="relative h-1 overflow-x-hidden w-full"
	class:opacity-0={!$navigating}
	class:opacity-100={$navigating}
>
	<div class="absolute opacity-40 bg-gray-600 w-[150%] h-full" />
	<div class="bg-gray-600 absolute h-[5px] inc" />
	<div class="bg-gray-600 absolute h-[5px] dec" />
</div>
<div class="max-w-[820px] px-4 mx-auto relative min-h-[calc(100vh_-_5px)] " dir="rtl">
	<header class="sm:py-10 py-5 ">
		<nav class="flex text-gray-500 sm:text-lg text-sm justify-center sm:justify-start">
			<a
				href="https://github.com/Webamoozcom/ponzi-calculator"
				class="px-4 flex justify-center items-center"><Github size={'25px'} /></a
			>
			<a href="https://www.webamooz.com/" class="ml-5 block mr-0">وب آموز</a>

			<a href="https://webamoozcom.github.io/warning-list" class="ml-5 block">لیست هشدار</a>

			<a href="/" class="font-sans tracking-[5px] items-center  mr-auto hidden sm:flex ">
				PONZI
				<span class="w-4 h-4 rounded-full bg-black block mx-3" />
			</a>
		</nav>
	</header>

	<slot />
	<footer>
		<div
			class="flex h-12 justify-center items-center text-gray-500 md:text-lg text-sm my-4  w-full px-2 "
		>
			<img src={'/logo-gray.png'} class="h-full ml-2" alt="" />
			تمامی حقوق متعلق به وب آموز و تل اسکم میباشد
		</div>
	</footer>
</div>

<style>
	.inc {
		animation: increase 2s infinite;
	}
	.dec {
		animation: decrease 2s 0.5s infinite;
	}

	@keyframes increase {
		from {
			left: -5%;
			width: 5%;
		}
		to {
			left: 130%;
			width: 100%;
		}
	}
	@keyframes decrease {
		from {
			left: -80%;
			width: 80%;
		}
		to {
			left: 110%;
			width: 10%;
		}
	}
</style>
