import { GET_COMMENTS, SET_COMMENTS, ADD_COMMENT } from './constants';
import { IComment } from './types';

export const getCommetsAction = () => ({
	type: GET_COMMENTS,
});

export const setCommentsAction = (comments: Array<IComment>) => ({
	type: SET_COMMENTS,
	comments,
});

export const addCommentAction = (comment: IComment) => ({
	type: ADD_COMMENT,
	comment,
});
