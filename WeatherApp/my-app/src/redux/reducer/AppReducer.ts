import  {ActionTypes} from "../contents/ActionTypes";

const initialState={
	countryDetails:[],
	weatherDetails:[]
}
type reducerType={
	payload:any,
	type:string
}
export const AppReducer=(state=initialState,{type,payload}:reducerType)=>{
	switch(type){
		case ActionTypes.COUNTRY_DETAILS:
		return {...state,countryDetails:payload}
        case ActionTypes.WEATHER_DETAILS:
		return {...state,weatherDetails:payload}
		default:
		return state
	}
}