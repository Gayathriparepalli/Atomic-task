import {useSelector} from "react-redux";
import {RootState} from "../redux/reducer/Index";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
export const ButtonPage=()=>{
	 const answer5:any=useSelector((state:RootState)=>state.answer5);
	   const answer:any=useSelector((state:RootState)=>state.answers);
     const navigate=useNavigate();
	   return (
            <Stack spacing={2} direction="row">
           <Button variant="contained" style={{backgroundColor:answer.answer1?"red":"gray"}}
           onClick={()=>navigate("/question1")}>1</Button>
       <Button variant="contained" style={{backgroundColor:answer.answer2?"red":"gray"}}
           onClick={()=>navigate("/question2")}>2</Button>
        <Button variant="contained" style={{backgroundColor:answer.answer3?"red":"gray"}}
           onClick={()=>navigate("/question3")}>3</Button>
      <Button variant="contained" style={{backgroundColor:answer.answer4?"red":"gray"}}
           onClick={()=>navigate("/question4")}>4</Button>
        <Button variant="contained" style={{backgroundColor:answer5.length?"red":"gray"}}
           onClick={()=>navigate("/question5")}>5</Button>
    </Stack>
	   	)
}
export default ButtonPage;