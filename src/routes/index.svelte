<script>
	import Logical from '../lib/components/index/Logical.svelte';

	import BetterProjects from '$lib/components/index/BetterProjects.svelte';
	import ElonNotice from '$lib/components/index/elon-notice.svelte';

	import Messanger from '$lib/components/index/Messanger.svelte';
	import WhatIsPonzi from '$lib/components/index/WhatIsPonzi.svelte';
	import GeneralDescription from '$lib/components/index/GeneralDescription.svelte';
</script>

<div class="text-center tracking-[5px] font-mono text-3xl text-gray-400 py-4  md:block hidden">
	××××
</div>
<Messanger />
<GeneralDescription dailyProfit={1.01} unit={30} />
<br>
<br>
<Logical />
<hr class="w-4/5 h-[2px] bg-slate-500 my-8 mx-auto" />
<BetterProjects />



<WhatIsPonzi />
