import {useDispatch,useSelector} from "react-redux";
import {answer1} from "../redux/actions/AppActions";
import {RootState} from "../redux/reducer/Index";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
 import ButtonPage from "./ButtonPage"
const Question1=()=>{
	const data=useSelector((state:RootState)=>state.questions);
      const answer:any=useSelector((state:RootState)=>state.answers);
      const dispatch=useDispatch();
      const handleChange=(e:any)=>{
         dispatch(answer1(e.target.value))
      }
	return (
          <>
          <ButtonPage/>
          <Typography>1.{data && data[0]['question']}</Typography>
      <FormControl>      
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"       
        name="radio-buttons-group"
        value={answer.answer1?answer.answer1:""}
        onChange={handleChange}
      >
      {data[0]['options'].map((val:any)=>
        <FormControlLabel key={val} value={val} control={<Radio />} label={val} />
         )}     
      </RadioGroup>
      </FormControl>
          </> 
          
		)
}
export default Question1