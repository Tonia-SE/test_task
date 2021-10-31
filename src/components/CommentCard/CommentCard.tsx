import React from 'react';
import { Box, Button } from '@material-ui/core';

interface ICommentCardProps {
	handleOpen: (event: any) => void;
	id: string;
	parentId?: string;
	topicId?: string;
	text: string;
	author?: string;
	date?: number;
	indent: number;
}

export const CommentCard: React.FC<ICommentCardProps> = ({ id, text, handleOpen, indent }) => {
	return (
		<Box key={`box${id}`} style={{ padding: indent }}>
			<Box key={`card${id}`}>{text}</Box>
			<Button
				color="primary"
				variant="outlined"
				key={`button${id}`}
				data-id={id}
				onClick={handleOpen}
			>
				+ comment this comment
			</Button>
		</Box>
	);
};
