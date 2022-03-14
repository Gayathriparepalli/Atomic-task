import {useDispatch,useSelector} from "react-redux";
import {answer3} from "../redux/actions/AppActions";
import {RootState} from "../redux/reducer/Index";
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
  import ButtonPage from "./ButtonPage"
const Question3=()=>{
	const data=useSelector((state:RootState)=>state.questions);
      const answer:any=useSelector((state:RootState)=>state.answers);
      const dispatch=useDispatch();
      const handleChange=(e:any)=>{
        dispatch(answer3(e.target.value));
      }
	return (
          <>
           <ButtonPage/>
          <Typography>3.{data && data[2]['question']}</Typography>
          <TextField variant="standard" value={answer.anser3} onChange={handleChange} label="enter answer here"/>
          </> 
          
		)
}
export default Question3;