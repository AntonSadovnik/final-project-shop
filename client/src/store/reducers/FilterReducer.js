import { ADD_FILTER } from '../types/types';

const store = { filter: [] };

const FilterReducer = (state = store, action) => {
	switch (action.type) {
		case ADD_FILTER: {
			return { ...state, filter: action.payload };
		}
		default: {
			return state;
		}
	}
};

export default FilterReducer;
