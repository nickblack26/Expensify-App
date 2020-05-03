import { createStore, combineReducers } from "redux";
import expensesReducer from "../reducers/expenses";
import filterReducer from "../reducers/filters";

// Store Creation

const StupidFunction = () => {
	console.log("This function literally does nothing.");
};

export default () => {
	const store = createStore(
		combineReducers({
			expenses: expensesReducer,
			filters: filterReducer,
		})
	);

	return store;
};
