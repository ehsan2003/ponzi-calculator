export type ProjectDefinition = {
	name: string;
	shortDescription: string;
	description: string;
	links: ({ name: string } & (
		| { url: string }
		| { archive: string }
		| { url: string; archive: string }
	))[];
	slug: string;
	tags: string[];

	logo: string;
	mainImageBig: string;
	mainImageSmall: string;
	mainImageAlt: string;

	startDate: Date;
	endDate?: Date;

	timeAlive: number;
	totalProfit: number;

	dailyProfit: number;
	timeline: {
		title: string;
		date: Date;
		description?: string;
		image?: string;
		link?: string;
		archivedLink?: string;
	}[];
	scamEstimate?: string;
	victimCountEstimate?: string;
	onWebamooz?: { url: string; date: Date }[];
	onTheNews?: {
		title: string;
		link: string;
	}[];
};
export type TinyProjectDefinition = {
	name: string;
	dailyProfit: number;
	slug: string;
	logo: string;
};
export type ProjectDefinitionServer = {
	name: string;
	shortDescription: string;
	description: string;
	links: ({ name: string } & (
		| { url: string }
		| { archive: string }
		| { url: string; archive: string }
	))[];
	slug: string;
	tags: string[];

	logo: string;
	mainImageBig: string;
	mainImageSmall: string;
	mainImageAlt: string;

	startDate: string;
	endDate?: string;

	dailyProfit: number;
	timeline: {
		title: string;
		date: string;
		description?: string;
		image?: string;
		link?: string;
		archivedLink?: string;
	}[];
	scamEstimate?: string;
	victimCountEstimate?: string;
	onWebamooz?: { url: string; date: Date }[];
	onTheNews?: {
		title: string;
		link: string;
	}[];
};
export const data: ProjectDefinitionServer[] = [
	{
		name: 'یونیک فایننس',
		shortDescription:
			'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
		description:
			'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه <br><br> و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می <br><br> باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را <br><br> برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و  <br><br> دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
		startDate: new Date('2019-01-01').toISOString(),
		endDate: new Date().toISOString(),
		mainImageBig: '/images/projects/test-ponzi-big.jpg',
		mainImageSmall: '/images/projects/test-ponzi-small.jpg',
		logo: '/images/projects/unique-finance-logo.png',
		tags: ['ponzi', 'crypto related'],
		timeline: [
			{
				title: 'شروع به کار',
				date: new Date(Date.now() - 1000000).toISOString()
			},
			{
				title: 'برنامه ریزی در کشتی تفریحی',
				date: new Date(Date.now() - 10000000).toISOString(),
				description:
					'در تاریخ ....... کلاهبرداران یونیک فایننس اقدام به اجاره ی کشتی تفریحی کردند تا از این طریق قربانیان اولیه را جذب کنند'
			},
			{
				title: 'عرضه ی رمز ارز جعلی فلان بهمان',
				date: new Date(Date.now() - 100000).toISOString(),
				image: '/images/projects/test-ponzi-big.jpg',
				link: 'https://unique.finance/category/market-data/',
				archivedLink: 'https://unique.finance/category/market-data/'
			},
			{
				title: 'دستگیری برخی عوامل توسط قوه قضاییه و معرفی شبکه در صدا و سیما',
				date: new Date().toISOString(),
				description:
					' در تاریخ فلان و بهمان صدا و سیمای جمهوری اسلامی برای اولین بار شیوه کلاه برداری پانزی را معرفی کرد',
				image: '/images/projects/test-ponzi-small.jpg'
			},
			{
				title: 'پایان کار',
				date: new Date(Date.now() + 1000000).toISOString(),
				description:
					'در تاریخ فلان و فلان و بهمان تمامی عوامل شبکه ی کلاه برداری یونیک فایننس توسط مامورین وزارت اطلاعات دستگیر شده و شبکه سقوط کرد'
			}
		],
		scamEstimate: 'صد ملیون',
		victimCountEstimate: 'یک میلیون نفر',
		dailyProfit: 1.0031820580257143,
		links: [],
		slug: 'test-ponzi',
		mainImageAlt: 'test-ponzi'
	}
];
