import { SET_SORT } from '../types/types';

const sortReducer = (state = 'default', action) => {
	switch (action.type) {
		case SET_SORT: {
			return action.payload;
		}
		default: {
			return state;
		}
	}
};

export default sortReducer;
