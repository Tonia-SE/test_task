export interface IAppContent {
	topics?: Array<ITopicCard>;
}

export interface IAppContentAction {
	type: string;
	topics?: Array<ITopicCard>;
}

export interface ITopicCard {
	id: string;
	title: string;
	img: string;
	author: string;
	date: number;
}
