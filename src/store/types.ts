import { IAppContent } from './appContent/types';
import { ICommentsContent } from './comment/types';

export interface ApplicationState {
	appContent: IAppContent;
	commentsContent: ICommentsContent;
}
