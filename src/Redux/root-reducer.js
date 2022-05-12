import { combineReducers } from "redux";
import recipeReducer from "./reducers";

const rootReducer = combineReducers({
    data: recipeReducer
})

export default rootReducer;