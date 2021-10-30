import { takeEvery, fork } from 'redux-saga/effects';
import { GET_USERS_REQUEST } from '../constants';

function* getUsers() {}

function* watchGetUsersRequest() {
	yield takeEvery(GET_USERS_REQUEST, getUsers);
}

const userSagas = [fork(watchGetUsersRequest)];

export default userSagas;
