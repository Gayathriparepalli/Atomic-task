import {useSelector} from "react-redux";
import {RootState} from "../redux/reducer/Index";

 const RowData=()=>{
 	const data=useSelector((state:RootState)=>state.row);
 	return (
   <div  data-testid="row">
  {JSON.stringify(data)}
   </div>
 		)

 }
 export default RowData