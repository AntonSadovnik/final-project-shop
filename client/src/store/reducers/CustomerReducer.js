import { SET_CUSTOMER } from '../types/types';

const store = null;

const CustomerReducer = (state = store, action) => {
	switch (action.type) {
		case SET_CUSTOMER: {
			return action.payload ;
		}
		default: {
			return state;
		}
	}
};

export default CustomerReducer;
