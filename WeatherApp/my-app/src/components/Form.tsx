import {useState} from "react";
import {Paper,TextField,Button} from "@mui/material";
import {countryDetails} from "../redux/actions/AppActions";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const Form =()=>{
	const [isDisabled,setIsDisabled]=useState(true);
	const [country,setCountry]=useState("")
	const dispatch=useDispatch();
	const navigate=useNavigate();
	const handleChange=(e:any)=>{
		setCountry(e.target.value);
		setIsDisabled(false)
	}
	const handleSubmit=(e:any)=>{
		e.preventDefault();
		dispatch(countryDetails(country));
		navigate("/countryDetails")
	}
  return (
  <Paper style={{width:300,padding:"20px 30px",margin:"30px auto"}}>
  <form onSubmit={handleSubmit}>
  <TextField variant="standard" value={country} onChange={handleChange} data-testid="inputField"
  label="Enter country"/>
  <Button type="submit" variant="contained" data-testid="submit">submit</Button>
  </form>
  </Paper>
  	)
}
export default Form;