import {useSelector} from "react-redux";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {RootState} from "../redux/reducer/Index"
const WeatherDetails=()=>{
	const details=useSelector((state:RootState)=>state.rootState.weatherDetails);

	
	return (

      <Card sx={{ maxWidth: 345 }} data-testid="card">
      <CardMedia
        component="img"
        alt="weather_icons"
        height="140"
        image={Array.isArray(details.weather_icons)?details.weather_icons[0]:null}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         temperature:{details.temperature}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        wind_speed :{details.wind_speed }
        </Typography>
         <Typography variant="body2" color="text.secondary">
        precip:{details.precip}
        </Typography>
      </CardContent>
      
    </Card>
   

		)
}
export default WeatherDetails;