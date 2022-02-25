<script lang="ts">
	import '../app.css';
</script>

<div class="max-w-[820px] px-10 mx-auto" dir="rtl">
	<header class="py-10 hidden md:block ">
		<nav class="flex text-gray-500 text-lg">
			<a href="/" class="mx-5 block mr-0">خانه</a>
			<a href="/" class="mx-5 block">تماس با ما</a>
			<a href="/" class="mx-5 block">درباره ما</a>
			<a href="/" class="mx-5 block">وبلاگ</a>
			<a href="/" class="font-sans tracking-[5px] flex items-center  mr-auto">
				SHIT.P
				<span class="w-4 h-4 rounded-full bg-black block mx-3" />
			</a>
		</nav>
	</header>
	<slot />
	<footer>
		<div class="flex md:flex-row flex-col">
			<div class="md:justify-start items-center md:items-start flex flex-col">
				<h4 class="text-2xl font-bold py-4">درباره ما بیشتر بدانید</h4>
				<p class="text-justify text-gray-400 max-w-xl">
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
					است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
					تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
					در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
					افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
					زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
					راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و
					جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
				</p>
			</div>
			<div class="basis-5/12 shrink-0 flex justify-center items-center p-5">
				<span class=" text-gray-400" dir="ltr">TODO: <br /> some images should go here</span>
			</div>
		</div>
		<div class="flex h-12 justify-center items-center mt-24 text-gray-500 md:text-lg text-sm my-4 ">
			<img src={'/logo-gray.png'} class="h-full ml-2" alt="" />
			تمامی حقوق متعلق به وب آموز و تل اسکم میباشد
		</div>
	</footer>
</div>
