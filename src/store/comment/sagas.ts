import { takeEvery, call, put, fork } from 'redux-saga/effects';
import { setCommentsAction } from './actions';
import { GET_COMMENTS } from './constants';
import { ICommentsContent } from './types';

async function fetchCommentsContent() {
	const response = await fetch('/mock.json');
	const json = await response.json();
	return json;
}

function* getCommentsContent() {
	try {
		const result: ICommentsContent = yield call(fetchCommentsContent);
		if (result.comments) {
			yield put(setCommentsAction(result.comments));
		}
	} catch (e) {
		console.log(`Error: ${e}`);
	}
}

function* watchGetCommentsContent() {
	yield takeEvery(GET_COMMENTS, getCommentsContent);
}

const commentsSagas = [fork(watchGetCommentsContent)];

export default commentsSagas;
