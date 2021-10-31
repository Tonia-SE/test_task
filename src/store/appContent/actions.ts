import { GET_CONTENT, SET_CONTENT } from './constants';
import { ITopicCard } from './types';

export const getContentAction = () => ({
	type: GET_CONTENT,
});

export const setContentAction = (topics: Array<ITopicCard>) => ({
	type: SET_CONTENT,
	topics,
});
