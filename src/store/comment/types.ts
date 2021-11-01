export interface ICommentsContent {
	comments: Array<IComment>;
}

export interface IComment {
	id: string;
	parentId: string;
	topicId: string;
	text: string;
	author: string;
	date: number;
}

export interface ICommentsAction {
	type: string;
	comment: IComment;
	comments: Array<IComment>;
}
