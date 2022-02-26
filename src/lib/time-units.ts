export const timeUnits = [
	{
		days: 1,
		label: 'روزانه'
	},
	{
		days: 7,
		label: 'هفتگی'
	},
	{
		days: 30,
		label: 'ماهانه'
	},
	{
		days: 365,
		label: 'سالانه'
	}
];

export function getUnitName(value: number) {
	for (let i = 0; i < timeUnits.length; i++) {
		if (timeUnits[i].days === value) {
			return timeUnits[i].label;
		}
	}
	return '';
}
