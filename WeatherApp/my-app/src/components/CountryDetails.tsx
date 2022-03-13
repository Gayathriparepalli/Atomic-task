import {weatherDetails} from "../redux/actions/AppActions";
import {useDispatch,useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {RootState} from "../redux/reducer/Index"
const CountryDetails=()=>{
	const details=useSelector((state:RootState)=>state.rootState.countryDetails);
	const dispatch=useDispatch();
	const navigate=useNavigate();
	const handleClick=(capital:string)=>{
		dispatch(weatherDetails(capital));
		// navigate("/weatherDetails");

	}
	return (

		<Grid container spacing={2}>
		{details.map((val:any)=>
		<Grid item xs={6} key={details.capital}>

      <Card sx={{ maxWidth: 345 }} data-testid="card">
      <CardMedia
        component="img"
        alt="flag"
        height="140"
        image={val.flag}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         capital:{val.capital}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        population:{val.population}
        </Typography>
         <Typography variant="body2" color="text.secondary">
        latlng:{val.latlng}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>handleClick(val.capital)}>capital weather</Button>
       
      </CardActions>
    </Card>
    </Grid>
    )}
    </Grid>

		)
}
export default CountryDetails