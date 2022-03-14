import {ActionTypes} from "../contents/ActionTypes";

const initialState={
	hits:[],
	row:[]
}
type reducerType={
	type:string,
	payload:any
}

export const hitsReducer=(state=initialState.hits,{payload,type}:reducerType)=>{
	switch(type){
		case ActionTypes.FETCH_DATA:
		return [...state,...payload]
		default:
		return state
	}
}
export const rowDataReducer=(state=initialState.row,{payload,type}:reducerType)=>{
	switch(type){
		case ActionTypes.FETCH_DATA:
		return payload
		default:
		return state
	}
}