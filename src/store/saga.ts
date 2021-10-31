import { all } from 'redux-saga/effects';
import appSagas from './appContent/sagas';
import commentsSagas from './comment/sagas';

export default function* rootSaga() {
	yield all([...appSagas, ...commentsSagas]);
}
