import {useDispatch,useSelector} from "react-redux";
import {answer5} from "../redux/actions/AppActions";
import {RootState} from "../redux/reducer/Index";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
 import ButtonPage from "./ButtonPage"
const Question5=()=>{
	const data=useSelector((state:RootState)=>state.questions);
      const answer:any=useSelector((state:RootState)=>state.answer5);
      const dispatch=useDispatch();
       const handleChange=(e:any)=>{
         dispatch(answer5(e.target.name))
      }
      const handleClick=()=>{
        console.log("submitted")
      }
	return (
          <>
           <ButtonPage/>
          <Typography>5.{data && data[4]['question']}</Typography>
        <FormGroup>
          {data[4]['options'].map((val:any)=>
      <FormControlLabel key={val} control={<Checkbox  />} label= {val} name={val}
      checked={answer.length?answer.includes(val):false} onChange={handleChange}/>
     )}
    </FormGroup>
      <Button onClick={handleClick}>submit</Button>
          </> 
          
		)
}
export default Question5