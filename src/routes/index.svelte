<script lang="ts">
	import SocialMedia from '../lib/components/index/SocialMedia.svelte';

	import Critical from '../lib/components/Alert.svelte';

	import Amounts from '../lib/components/Amounts.svelte';

	import Logical from '../lib/components/index/Logical.svelte';

	import BetterProjects from '$lib/components/index/BetterProjects.svelte';

	import Messanger from '$lib/components/index/Messanger.svelte';
	import WhatIsPonzi from '$lib/components/index/WhatIsPonzi.svelte';
	import GeneralDescription from '$lib/components/index/GeneralDescription.svelte';

	import type { InputValues } from '$lib/components/index/Inputs.svelte';
	import type { TinyProjectDefinition } from '$lib/projects-data';
	export let projects: TinyProjectDefinition[];
	let scroller: GeneralDescription;
	import { fly } from 'svelte/transition';
	let inputs: InputValues;

	$: inputs && scroller && setTimeout(() => scroller.scrollIntoView(), 450);
</script>

<svelte:head>
	<title>پانزی</title>
	<meta
		name="description"
		value="پانزی شیوه ی کلاه برداریی که چارلز پانزی سال ۱۹۱۹ ابدا کرد کماکان دامن گیر مردم است"
	/>
</svelte:head>
<div class="text-center tracking-[5px] font-mono text-3xl text-gray-400 py-4  md:block hidden">
	××××
</div>
<Messanger on:inputs-change={(e) => (inputs = e.detail)} />

{#if inputs}
	<div transition:fly={{ y: 200, duration: 400 }}>
		{#if inputs.dailyBonus > 1.00130821206895}
			<GeneralDescription
				dailyBonus={inputs.dailyBonus}
				unit={inputs.timeUnit}
				bind:this={scroller}
			/>
			<br />
			<Amounts dailyBonus={inputs.dailyBonus} initialBudget={inputs.initialBudget} />
			<Logical />
			<hr class="w-4/5 h-[2px] bg-slate-500 my-8 mx-auto" />
			{#if inputs.dailyBonus > 1.0016276620118332 && projects.every((p) => p.dailyBonus > inputs.dailyBonus)}
				<BetterProjects defs={projects} />
			{/if}
			<Critical>
				هشدار!
				<br />
				آنچه به شما معرفی شده کلاه برداری پانزی است!
			</Critical>
			<WhatIsPonzi />
			<SocialMedia />
		{:else}
			<h4 class="text-4xl text-center">مراقب باش!</h4>
			<p>
				اگه یه پیشنهاد سرمایه گذاری داشتی که بهت سود ثابت میداد حواستو جمع کن اخیرا یه شیوه ی کلاه
				برداری به شدت در حال تبلیغ و گسترشه حالا پانزی چیه ؟
			</p>
			<WhatIsPonzi />

			<h4 class="text-4xl text-center mb-3">سرمایه گذاری ارزش فکر کردن داره!</h4>
			<p class="text-justify">
				هیچوقت فکر کردی که اگه این داره کار واقعا سوددهی میکنه چرا نمیره سراغ یه بانک یا آدم پولدار
				تر؟‌ پولدارا خیلی پول دارن. ۸۰ درصد ثروت دست ۲۰ درصد جامعس، تو اون ۲۰ درصد هم باز همین قاعده
				حاکمه و تو اونا هم باز همین حاکمه الی آخر... هیچکس واسش نمیصرفه که دونه دونه مردمو قانع کنه
				که سود درست بده. چون میتونه خیلی ساده چند تا بانک و صندوق سرمایه گذاری رو قانع کنه واسه اونا
				کار کنه. هم راحت تره هم فقط به همون چندتا هم جواب میده.
				<br />
				<br />
				ولی کسایی که پول دستشونه اکثرا پولشون جا های مطمئن سودده دیگس (زمین، شرکت، طلا، ...) و سخت میشه
				گولشون زد. برعکس مردم عادی سطح جامعه که کمتر مطلع هستن و به اون پول سود محتاجن. ماشینشونو میفروشن،
				وام میگیرن و پولشونو میدن به این شیادین که بذارن رو هم و در برن.
				<br />
				<br />
				پس هروقت دیدی یکی از عموم مردم داره پول جمع میکنه بدون یه کاسه ای زیر نیم کاسه است.
			</p>

			<h4 class="text-4xl text-center my-3">در نهایت ...</h4>
			<p>
				هیچ چیز قطعی نیست توی بحث سرمایه گذاری نمیشه با اطمینان گفت چیزی که بهت پیشنهاد شده کلاه
				برداری هست یا نه ولی دقت کن و بیشتر مطالعه کن و به حرف اطرافیان اکتفا نکن چقدر زیاد بودن
				کسایی که به امید پول های درشت زندگیشونو به باد دادن

				<br />
				اگر از ارز های دیجیتال به اندازه ی کافی سر در نمیاری بهتره قبل از سرمایه گذاری مطالعه ی کافی
				بکنی اونم نه از هر منبعی خیلی از پیجای اینستاگرامی که دارن آموزش میدن خودشون به فکر جیب مردمن
			</p>
			<SocialMedia />
		{/if}
	</div>
{/if}

<br />
