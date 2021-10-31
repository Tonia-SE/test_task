import { takeEvery, call, put, fork } from 'redux-saga/effects';
import { setContentAction } from './actions';
import { GET_CONTENT } from './constants';
import { IAppContent } from './types';

async function fetchContent() {
	const response = await fetch('/mock.json');
	const json = await response.json();
	return json;
}

function* getContent() {
	try {
		const result: IAppContent = yield call(fetchContent);
		if (result.topics) {
			yield put(setContentAction(result.topics));
		}
	} catch (e) {
		console.log(`Error: ${e}`);
	}
}

function* watchGetContent() {
	yield takeEvery(GET_CONTENT, getContent);
}

const appSagas = [fork(watchGetContent)];

export default appSagas;
