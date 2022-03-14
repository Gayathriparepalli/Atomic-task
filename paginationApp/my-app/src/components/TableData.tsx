import {useState,useEffect} from "react";
import {rowData,fetchData} from "../redux/actions/AppActions";
import {useDispatch,useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {RootState} from "../redux/reducer/Index";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const TableData=()=>{
	const hits:any=useSelector((state:RootState)=>state.hits);
	const [page,setPage]=useState(0);
	const [pageNo,setPageNo]=useState(1);
	const [search,setSearch]=useState("");
   const dispatch=useDispatch();
   const navigate=useNavigate();
   const dataPerPage=20
	useEffect(()=>{
        setTimeout(()=>{
        	dispatch(fetchData(page));
        	setPage(page+1)
        },10000)
	},[page])

	const data=hits.slice((pageNo-1)*dataPerPage,pageNo*dataPerPage);
const handleChange=(e:any ,value:number)=>{
    setPageNo(value);
}
const handleClick=(row:any)=>{
	dispatch(rowData(row));
	navigate("/rowData")
}
	return (
		<>
		<TextField variant="standard" label="search by title or created-at" 
		value={search} onChange={(e:any)=>setSearch(e.target.value)}/>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" data-testid="table">
        <TableHead>
          <TableRow data-testid="row1">
            <TableCell>page</TableCell>
            <TableCell >title</TableCell>
            <TableCell >url</TableCell>
            <TableCell >created_at</TableCell>
            <TableCell >author</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.filter((val:any)=>{
          	if(search===""){
          		return val
          	}else if(val.title.toUpperCase().includes(search.toUpperCase())){
          		return val
          	}
          })
          	.map((row:any) => (
            <TableRow
            data-testid="row2"
            onClick={()=>handleClick(row)}
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {pageNo}
              </TableCell>
              <TableCell >{row.title}</TableCell>
              <TableCell >{row.url}</TableCell>
              <TableCell >{row.created_at}</TableCell>
              <TableCell >{row.author}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {hits.length?
        <Stack spacing={2} style={{marginBottom:10}}>     
      
      <Pagination count={page} page={pageNo} color="secondary" size="small" onChange={handleChange}/>
 
    </Stack>
:null}
    </>
		)
}
export default TableData;