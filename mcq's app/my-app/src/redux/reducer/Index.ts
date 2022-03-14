import {combineReducers} from 'redux';
import {questionsReducer,answersReducer,answer5Reducer} from "./AppReducer";

export const reducer=combineReducers({
	questions:questionsReducer,
	answers:answersReducer,
	answer5:answer5Reducer
})
export type RootState=ReturnType<typeof reducer>