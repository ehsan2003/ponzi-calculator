const DIVISIONS: { amount: number; name: Intl.RelativeTimeFormatUnit }[] = [
	{ amount: 60, name: 'seconds' },
	{ amount: 60, name: 'minutes' },
	{ amount: 24, name: 'hours' },
	{ amount: 7, name: 'days' },
	{ amount: 4.34524, name: 'weeks' },
	{ amount: 12, name: 'months' },
	{ amount: Number.POSITIVE_INFINITY, name: 'years' }
];

const formatter = new Intl.RelativeTimeFormat('fa', { style: 'narrow' });

export function formatTime(seconds: number): string {
	for (const divisor of DIVISIONS) {
		if (seconds < divisor.amount) {
			return formatter.format(Math.floor(seconds), divisor.name).replace('بعد', '');
		}
		seconds = seconds / divisor.amount;
	}
	return formatter.format(Math.floor(seconds), 'years').replace('بعد', '');
}
