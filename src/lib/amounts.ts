export type MoneyAmount = {
	amount: number;
	title: string;
	shortDescription: string;
	longDescription: string;
	image: string;
};

export const data: MoneyAmount[] = [
	{
		amount: 129e9,
		title: 'ثروت بیل گیتس ',
		shortDescription: 'مالک شرکت مایکروسافت',
		image: '/images/amounts/bil-gates.webp',
		longDescription: 'مالک شرکت مایکروسافت و چهارمین مرد ثروتمند دنیا در حال حاضر است'
	},
	{
		amount: 249.3e9,
		title: 'ثروت ایلان ماسک',
		shortDescription: 'مالک شرکت تسلا و ثروت مندترین فرد دنیا',
		image: '/images/amounts/elon-musk.webp',
		longDescription: 'مالک شرکت تسلا و اسپیس ایکس که ثروت مند ترین فرد دنیا در حال حاضر است'
	},
	{
		amount: 20.94e12,
		title: 'میزان تولید ناخالص آمریکا',
		shortDescription: 'تولید ناخالص ایلات متحده ی آمریکا در سال ۲۰۲۰ که',
		image: '/images/amounts/us.svg',
		longDescription:
			' تولید ناخالص آمریکا که برابر با :ارزش بازاری (ارزش پولی) تمامی کالاها و خدمات نهایی تولید شده در داخل مرزهای یک کشور طی دورهٔ زمانی خاص  '
	},
	{
		amount: 191.7e9,
		title: 'میزان تولید ناخالص ایران',
		shortDescription: 'تولید ناخالص  ایران در سال ۲۰۲۰ ',
		image: '/images/amounts/iran.svg',
		longDescription:
			'  تولید ناخالص ایران در سال ۲۰۲۰ که برابر با : ارزش بازاری (ارزش پولی) تمامی کالاها و خدمات نهایی تولید شده در داخل مرزهای یک کشور طی دورهٔ زمانی خاص'
	}
];
