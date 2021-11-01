import { GET_CONTENT, SET_CONTENT } from './constants';
import { initialState } from './state';
import { IAppContentAction } from './types';

export const appContentReducer = (state = initialState, action: IAppContentAction) => {
	switch (action.type) {
		case GET_CONTENT: {
			return {
				...state,
			};
		}
		case SET_CONTENT: {
			return {
				...state,
				topics: action.topics,
			};
		}
		default: {
			return state;
		}
	}
};
