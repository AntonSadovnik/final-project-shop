import { SET_LOGIN, SET_LOGOUT } from '../types/types';

const store = false;

const LoginReducer = (state = store, action) => {
	switch (action.type) {
		case SET_LOGIN: {
			return true;
		}
		case SET_LOGOUT: {
			return false;
		}
		default: {
			return state;
		}
	}
};

export default LoginReducer;
