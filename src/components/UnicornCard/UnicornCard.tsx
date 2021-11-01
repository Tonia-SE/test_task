import React from 'react';
import { Button, Card } from '@material-ui/core';
import { ITopicCard } from '../../store/appContent/types';

export const UnicornCard: React.FC<ITopicCard> = (props) => {
	const { id } = props;

	return (
		<Card key={id}>
			<Button>{id}</Button>
		</Card>
	);
};
