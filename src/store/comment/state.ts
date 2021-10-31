import { ICommentsContent } from './types';

const savedComments = localStorage.getItem('comments');

let comments = [];

if (savedComments !== null) {
	comments = JSON.parse(savedComments);
}

export const initialState: ICommentsContent = {
	comments,
};
