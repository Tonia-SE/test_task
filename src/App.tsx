import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UnicornCard from './components/UnicornCard';
import { getContentAction } from './store/appContent/actions';
import { getCommetsAction } from './store/comment/actions';
import { ApplicationState } from './store/types';

export const App: React.FC = () => {
	const dispatch = useDispatch();
	const content = useSelector((state: ApplicationState) => state.appContent.topics);

	useEffect(() => {
		dispatch(getContentAction());
		if (!localStorage.getItem('comments')) {
			dispatch(getCommetsAction());
		}
	}, []);

	return (
		<>
			{content &&
				content.map((topic) => (
					<Link key={`key${topic.id}`} to={`/topic?id=${topic.id}`}>
						<UnicornCard key={topic.id} {...topic} />
					</Link>
				))}
		</>
	);
};
