import { takeLatest, all, put, fork, call } from "redux-saga/effects";
import * as types from './actions';
import { getRecipe } from "./api";

export function* onLoadRecipeAsync({payload: query}) {
	try {
		console.log("query" , query);
		const response = yield call(getRecipe, query);
		console.log({response})
		yield put({type: types.FETCH_RECIPE_START, payload: response.data});
	} catch (error) {
		console.log({error})
		yield put({type: types.FETCH_RECIPE_FAILURE, payload: error});
	}
}
export function* onLoadRecipe() {
	yield takeLatest(types.FETCH_RECIPE_START, onLoadRecipeAsync);
}

const recipeSaga  = [fork(onLoadRecipe)];

export default function* rootSaga() {
	yield all([...recipeSaga]);
}