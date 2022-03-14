import {useDispatch,useSelector} from "react-redux";
import {answer4} from "../redux/actions/AppActions";
import {RootState} from "../redux/reducer/Index";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
 import Grid from '@mui/material/Grid';
  import ButtonPage from "./ButtonPage"
const Question4=()=>{
	const data=useSelector((state:RootState)=>state.questions);
      const answer:any=useSelector((state:RootState)=>state.answers);
      const dispatch=useDispatch();
      const handleChange=(e:any)=>{
         dispatch(answer4(e.target.value))
      }
	return (
          <>
           <ButtonPage/>
          <Typography>1.{data && data[3]['question']}</Typography>
      <FormControl>   

      <Grid container>
      <Grid item xs={6}>
      <ul>
      {data[3]['GroupA'].map((val:any)=>
      <li key ={val.id}>{val.id}.{val.title}</li>
        )}
      </ul>
  
      </Grid>
        <Grid item xs={6}>
        <ul>
      {data[3]['GroupB'].map((val:any)=>
      <li key ={val.id}>{val.id}.{val.title}</li>
       )}
      </ul>
       
  
      </Grid>
      </Grid>   
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"       
        name="radio-buttons-group"
        value={answer.answer4?answer.answer4:""}
        onChange={handleChange}
      >
      {data[3]['options'].map((val:any)=>
        <FormControlLabel key={val} value={val} control={<Radio />} label={val} />
         )}     
      </RadioGroup>
      </FormControl>
          </> 
          
		)
}
export default Question4