import React, { useCallback, useState } from 'react';
import { Button, Modal, Paper, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addCommentAction } from '../../store/comment/actions';

interface IAddCommentFormProps {
	open: boolean;
	handleClose: () => void;
	topicId: string;
	parentId?: string;
}

export const AddCommentForm: React.FC<IAddCommentFormProps> = ({
	open,
	handleClose,
	topicId,
	parentId,
}) => {
	const [text, setText] = useState('');
	const [author, setAuthor] = useState('');
	const dispatch = useDispatch();
	const handleSubmit = useCallback(() => {
		dispatch(
			addCommentAction({
				id: uuid(),
				parentId: parentId || '',
				topicId,
				text,
				author,
				date: Date.now(),
			})
		);
		handleClose();
	}, [text, author]);

	const handleSetAuthor = useCallback(
		(event) => {
			setAuthor(event.currentTarget.value);
		},
		[author]
	);

	const handleSetText = useCallback(
		(event) => {
			setText(event.currentTarget.value);
		},
		[text]
	);

	return (
		<Modal open={open} onClose={handleClose}>
			<Paper style={{ margin: '0 auto', width: 500, height: 500, padding: 15 }}>
				<TextField
					margin="normal"
					required
					id="author_name"
					label="author"
					name="author"
					autoFocus
					value={author}
					onChange={handleSetAuthor}
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					name="comment"
					label="leave your comment here"
					type="text"
					id="comment_text"
					variant="outlined"
					InputProps={{ style: { width: 400, height: 300 } }}
					multiline
					maxRows={12}
					value={text}
					onChange={handleSetText}
				/>
				<Button variant="contained" onClick={handleSubmit}>
					OK
				</Button>
				<Button variant="contained" onClick={handleClose}>
					Cancel
				</Button>
			</Paper>
		</Modal>
	);
};
