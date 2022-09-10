import { ADD_FILTER } from '../types/types';

const store = [];

const FilterReducer = (state = store, action) => {
	switch (action.type) {
		case ADD_FILTER: {
			return action.payload;
		}
		default: {
			return state;
		}
	}
};

export default FilterReducer;
