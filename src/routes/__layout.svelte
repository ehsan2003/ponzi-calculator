<script lang="ts">
	import '../app.css';
</script>

<div class="max-w-[820px] px-5 mx-auto" dir="rtl">
	<header class="py-10 hidden md:block ">
		<nav class="flex text-gray-500 text-lg">
			<a href="/" class="mx-5 block mr-0">خانه</a>
			<a href="/" class="mx-5 block">تماس با ما</a>
			<a href="/" class="mx-5 block">درباره ما</a>
			<a href="/" class="mx-5 block">وبلاگ</a>
			<a href="/" class="font-sans tracking-[5px] flex items-center  mr-auto">
				PONZI.IR
				<span class="w-4 h-4 rounded-full bg-black block mx-3" />
			</a>
		</nav>
	</header>
	<slot />
	<footer>
		<div class="flex h-12 justify-center items-center mt-16 text-gray-500 md:text-lg text-sm my-4 ">
			<img src={'/logo-gray.png'} class="h-full ml-2" alt="" />
			تمامی حقوق متعلق به وب آموز و تل اسکم میباشد
		</div>
	</footer>
</div>
