import {GET_ROLES_SENDING, GET_ROLES_SUCCESS, GET_ROLES_FAILED} from '../actions/roles.actions';

const initialState = {
	roles: [],
};

export default (state, action) => {
	if (state === undefined) {
		return initialState;
	}
	if (action === undefined && action.type === undefined) {
		return initialState;
	}
	const {payload} = action;

	switch (action.type) {
		case GET_ROLES_SUCCESS:
			return {
				...state,
				roles: payload.roles.data,
			};
		default:
			return state;
	}
};
