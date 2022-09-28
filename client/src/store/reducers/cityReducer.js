import { SET_CITY } from '../types/types';

const cityReducer = (state = '', action) => {
	switch (action.type) {
		case SET_CITY: {
			return action.payload.city;
		}
		default: {
			return state;
		}
	}
};

export default cityReducer;
