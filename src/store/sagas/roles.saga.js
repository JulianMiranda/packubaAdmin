import {call, put, takeEvery} from 'redux-saga/effects';
import {GET_ROLES_SENDING, GET_ROLES_SUCCESS} from '../actions/roles.actions';
import {fetchRoles} from '../../fetch';
import {showNotification} from 'react-admin';

export function* apiSideEffect(action) {
	try {
		const roles = yield call(fetchRoles);
		yield put({type: GET_ROLES_SUCCESS, payload: {roles}});
	} catch (error) {
		yield put(showNotification('GET_ROLES_FAILED'));
	}
}

export default function* apiSaga() {
	yield takeEvery(GET_ROLES_SENDING, apiSideEffect);
}
