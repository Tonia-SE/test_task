import { combineReducers, Reducer } from 'redux';
import { ApplicationState } from './types';
import { appContentReducer } from './appContent/reducer';
import { commentsReducer } from './comment/reducer';

export const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
	appContent: appContentReducer,
	commentsContent: commentsReducer,
});
