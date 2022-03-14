import {useDispatch,useSelector} from "react-redux";
import {answer2} from "../redux/actions/AppActions";
import {RootState} from "../redux/reducer/Index";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
  import ButtonPage from "./ButtonPage"
const Question2=()=>{
	const data=useSelector((state:RootState)=>state.questions);
      const answer:any=useSelector((state:RootState)=>state.answers);
      const dispatch=useDispatch();
       const handleChange=(e:any)=>{
         dispatch(answer2(e.target.value))
      }
	return (
          <>
           <ButtonPage/>
          <Typography>2.{data && data[1]['question']}</Typography>
      <FormControl>      
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"       
        name="radio-buttons-group"
        value={answer.answer2?answer.answer2:""}
        onChange={handleChange}
      >
      {data[1]['options'].map((val:any)=>
        <FormControlLabel key={val} value={val} control={<Radio />} label={val} />
         )}     
      </RadioGroup>
      </FormControl>
          </> 
          
		)
}
export default Question2