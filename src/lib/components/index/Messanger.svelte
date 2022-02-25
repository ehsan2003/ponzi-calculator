<script>
	import Play from 'svelte-material-icons/Play.svelte';
</script>

<div
	class="flex flex-col md:flex-row justify-between mb-12 mt-5 items-center max-h-[100vh] md:max-h-auto"
>
	<div class="md:basis-5/12 max-w-xs">
		<div
			class="float-left text-justify px-2 py-3 max-w-[80%] bg-zinc-200 my-2 rounded-2xl shadow-lg  rounded-tl-none"
		>
			سلام ممد <br /> چطوری رفیق قدیمی
		</div>
		<div
			class="float-left text-justify px-2 py-3 max-w-[80%] bg-zinc-200 my-2 rounded-2xl shadow-lg  rounded-tl-none"
		>
			ببین یه پروژه هست عالیه باورت نمیشه هر ماه ۳۵ درصد سود میده گفتم کمکی بهت کنم تو یه سال زندگیت
			از این رو به اون رو بشه
		</div>
		<div
			class="float-left text-justify px-2 py-3 max-w-[80%] bg-zinc-200 my-2 rounded-2xl shadow-lg  rounded-tl-none"
		>
			وایسا لینکشو بفرستم
		</div>
	</div>
	<div class="flex flex-col justify-center items-center md:py-0 py-10">
		<span class="w-[3px] h-12  bg-gray-400 rounded-md hidden md:block" />
		<span class="h-[3px] w-12  bg-gray-400 rounded-md block md:hidden" />
	</div>
	<div class="md:basis-5/12 flex flex-col justify-center items-center md:items-start ">
		<h1 class="md:text-4xl text-3xl font-thin">
			جدیدا
			<br />
			از این پیاما گرفتی؟
		</h1>
		<div class="grid grid-cols-[5fr_2fr] gap-y-1 w-64 mt-5 items-stretch">
			<div class="border border-black  rounded-r-[4px] overflow-hidden">
				<input type="text" class="block  outline-none w-full h-full placeholder:text-sm  px-2" placeholder="درصد سود" />
			</div>
			<div class="rounded-l-[4px] overflow-hidden">
				<select
					class="bg-black  text-white px-2 h-full w-full block text-center text-sm tracking-wide"
					name=""
					id=""
				>
					<option value="30">ماهانه</option>
					<option value="1">روزانه</option>
					<option value="365">سالانه</option>
					<option value="7">هفتگی</option>
				</select>
			</div>
			<div class="border border-black  rounded-r-[4px] overflow-hidden">
				<input type="text" class="block  outline-none w-full h-full placeholder:text-sm  px-2" placeholder="سرمایه ورودی">
			</div>
			<div class="bg-black  text-white px-2 h-full w-full text-center text-sm tracking-wide rounded-l-[4px] overflow-hidden flex items-center justify-center font-mono font-bold"><span>$</span></div>
			<button class="col-span-2 text-cente bg-black rounded-md text-white py-1 text-lg">بزن بریم</button>
		</div>
	</div>
</div>
<!-- 
<div class="flex">
	<input
		type="text"
		class="outline-none caret-slate-400 px-1 w-full  rounded-sm placeholder:text-xs"
		placeholder="سودش چقدره ؟"
	/>
	<select class="text-xs">
		<option value={30}>ماهانه</option>
		<option value={1}>روزانه</option>
		<option value={365}>سالانه </option>
		<option value={7}>هفتگی</option>
	</select>
</div>
<div class="flex ">
	<div>
		<input
			type="text"
			class="outline-none w-full caret-slate-400 px-1  rounded-sm placeholder:text-xs "
			placeholder="سرمایه ورودی"
		/>
	</div>

	<span class=" text-left pl-2 flex items-center justify-end pointer-events-none ">
		<span> $ </span>
	</span>
</div>

<button class="bg-black text-center text-white py-1 w-16 rounded-[4px]  "> بزن بریم</button> -->
