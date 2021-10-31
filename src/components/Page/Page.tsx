import React, { ReactNode, useCallback, useState } from 'react';
import { Box, Button } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store/types';
import AddCommentForm from '../AddCommentForm';
import CommentCard from '../CommentCard';
import { IComment } from '../../store/comment/types';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

export const Page: React.FC = () => {
	const topicId = useQuery().get('id');
	const comments = useSelector((state: ApplicationState) => state.commentsContent.comments);
	const currentComments = comments.filter((comment) => comment.topicId === topicId);

	interface ICommentWithSubnodes extends IComment {
		subNodes: Array<ICommentWithSubnodes>;
	}

	const commentsTree: Array<ICommentWithSubnodes> = [];

	const findInTree = (
		tree: Array<ICommentWithSubnodes>,
		parentId: string
	): ICommentWithSubnodes | null => {
		let node = null;
		for (let i = 0; i < tree.length; i++) {
			if (tree[i].id === parentId) {
				node = tree[i];
				break;
			} else if (tree[i].subNodes.length > 0) {
				node = findInTree(tree[i].subNodes, parentId);
			}
		}
		return node;
	};

	const addToTree = (comment: IComment) => {
		const commentWithSubnodes = { ...comment, subNodes: [] };
		if (comment.parentId === '') {
			commentsTree.push(commentWithSubnodes);
		} else {
			findInTree(commentsTree, comment.parentId)?.subNodes.push(commentWithSubnodes);
		}
	};

	currentComments.forEach((comment) => {
		addToTree(comment);
	});

	const [open, setIsOpen] = useState(false);
	const [parentId, setParentId] = useState('');

	const handleClose = useCallback(() => {
		setIsOpen(false);
	}, []);

	const handleOpen = useCallback(
		(event) => {
			setParentId(event.currentTarget.getAttribute('data-id'));
			setIsOpen(true);
		},
		[parentId]
	);

	const renderTree = (tree: Array<ICommentWithSubnodes>, indent: number = 15): ReactNode => {
		return (
			<>
				{tree &&
					tree.map((comment) => {
						return (
							<Box
								key={comment.id}
								style={{
									padding: 15,
									border: '1px solid grey',
									borderRadius: '5px',
									marginTop: 5,
								}}
							>
								<CommentCard
									indent={indent}
									id={comment.id}
									handleOpen={handleOpen}
									text={comment.text}
								/>
								{comment.subNodes && renderTree(comment.subNodes, indent + 15)}
							</Box>
						);
					})}
			</>
		);
	};

	return (
		<>
			{topicId && (
				<AddCommentForm
					parentId={parentId}
					topicId={topicId}
					open={open}
					handleClose={handleClose}
				/>
			)}
			<Box key={topicId} style={{ backgroundColor: 'wheat' }}>
				<Link to="/">
					<div>BACK</div>
				</Link>
				<Button color="secondary" variant="outlined">
					{topicId}
				</Button>
				<Button color="primary" variant="outlined" onClick={handleOpen}>
					+ new comment
				</Button>
			</Box>
			<Box>{renderTree(commentsTree)}</Box>
		</>
	);
};
