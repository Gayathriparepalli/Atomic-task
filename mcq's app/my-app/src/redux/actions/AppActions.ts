import {ActionTypes} from "../contents/ActionTypes";
import data from "../../db.json";

export const fetchQuestions=(language:string)=>{
	
		if(language==="English"){
		return { 
			type:ActionTypes.QUESTIONS,
		payload:data.English
	}
	}else{
	  return { 
			type:ActionTypes.QUESTIONS,
		payload:data.Telugu
	}
}}

export const answer1=(answer:string)=>{
	return {
		type:ActionTypes.ANSWER1,
		payload:answer
	}
}
export const answer2=(answer:string)=>{
	return {
		type:ActionTypes.ANSWER2,
		payload:answer
	}
}
export const answer3=(answer:string)=>{
	return {
		type:ActionTypes.ANSWER3,
		payload:answer
	}
}
export const answer4=(answer:string)=>{
	return {
		type:ActionTypes.ANSWER4,
		payload:answer
	}
}
export const answer5=(answer:any)=>{
	return {
		type:ActionTypes.ANSWER5,
		payload:answer
	}
}