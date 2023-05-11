import { combineReducers } from "redux";

import { todos } from "./todos/todos-reducer";

export const rootReducer = combineReducers({
	todos,
});
