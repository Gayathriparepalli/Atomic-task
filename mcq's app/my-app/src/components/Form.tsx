import {useState} from "react"
import {useDispatch,useSelector} from "react-redux";
import {fetchQuestions} from "../redux/actions/AppActions";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
const Form =()=>{
	 const [language, setLanguage] =useState('');
	 const navigate=useNavigate();
	 const dispatch=useDispatch();
  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value );   
    console.log(language)
  };
  const handleSubmit=(e:any)=>{
  e.preventDefault();
  console.log("hello")
  dispatch(fetchQuestions(language))
  navigate("/question1");
  console.log("hello")
  }
	return (
		<>
		<form onSubmit={handleSubmit}>
       <TextField variant="standard" label="enter name"  />
       <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />        
      </RadioGroup>
    </FormControl>
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}         
          onChange={handleChange}
        >
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Telugu">Telugu</MenuItem>          
        </Select>
      </FormControl>
      <Button variant="contained" type="submit">submit</Button>
      </form>
    </>

		)
}
export default Form