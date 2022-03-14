import {ActionTypes} from "../contents/ActionTypes";
const initialState={
	questions:[],
	answers:[],
	answer5:[]
}

type ReducerType={
	type:string,
	payload:any
}

export const questionsReducer=(state=initialState.questions,{type,payload}:ReducerType)=>{
	switch(type){
		case ActionTypes.QUESTIONS:
		return payload
		default:
		return state
	}
}
export const answersReducer=(state=initialState.answers,{type,payload}:ReducerType)=>{
	switch(type){
		case ActionTypes.ANSWER1:
		return {...state,answer1:payload}
		case ActionTypes.ANSWER2:
		return {...state,answer2:payload}
			case ActionTypes.ANSWER3:
		return {...state,answer3:payload}
			case ActionTypes.ANSWER4:
		return {...state,answer4:payload}
		default:
		return state
	}
}
export const answer5Reducer=(state=initialState.answer5,{type,payload}:ReducerType)=>{
	switch(type){
		case ActionTypes.ANSWER5:
		const exists=state.filter((val:any)=>val===payload)
		if(exists.length)
			return state.filter((val:any)=>val!==payload)
		else
		return [...state,payload]
		default:
		return state
	}
}