import { initialState } from './state';
import { GET_COMMENTS, SET_COMMENTS, ADD_COMMENT } from './constants';
import { ICommentsAction } from './types';

export const commentsReducer = (state = initialState, action: ICommentsAction) => {
	switch (action.type) {
		case GET_COMMENTS: {
			return {
				...state,
			};
		}
		case SET_COMMENTS: {
			localStorage.setItem('comments', JSON.stringify(action.comments));
			return {
				...state,
				comments: action.comments,
			};
		}
		case ADD_COMMENT: {
			if (action.comment) {
				state.comments.push(action.comment);
				localStorage.setItem('comments', JSON.stringify(state.comments));
			}
			return {
				...state,
				comments: state.comments,
			};
		}
		default: {
			return state;
		}
	}
};
