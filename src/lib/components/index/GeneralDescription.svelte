<script lang="ts">
	export let dailyProfit: number;
	export let unit: number;''

    const units  = [
        {
            days: 1,
            name:'روزانه',
        },{
            days: 7,
            name:'هفتگی',
        },{
            days: 30,
            name:'ماهانه',
        },{
            days: 365,
            name:'سالانه',
        }
    ]
    function getUnitName(value:number){ 
        for(let i = 0; i < units.length; i++){
            if(units[i].days === value){
                return units[i].name;
            }
        }
        return '';
    }
</script>

<div class="bg-black rounded-xl w-full py-5 text-white flex items-center ">
	<h3 class="text-2xl font-bold px-5 leading-10">
		این پروژه به شما
		{(dailyProfit**unit).toFixed(2)}
        درصد سود 
        {getUnitName(unit)}
        میده یعنی مدت زمانی که لازمه پول شما ده برابر بشه‌ 
        <span class="px-2 mx-1 bg-white text-black rounded-lg">
            {Math.floor(Math.log(10)/Math.log(dailyProfit))}
        </span>
        روزه
        <br>
        <p class="text-center mt-2">
            برای رسیدن به این مقادیر شما باید :
        </p>
        
	</h3>
</div>
