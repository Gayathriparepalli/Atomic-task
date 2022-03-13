import React from 'react';
import Form from "./components/Form";
import CountryDetails from "./components/CountryDetails";
import WeatherDetails from "./components/WeatherDetails";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <div >
     <Router>
     <Routes>
     <Route path="/" element={<Form/>}/>
        <Route path="/countryDetails" element={<CountryDetails/>}/>
          <Route path="/weatherDetails" element={<WeatherDetails/>}/>
     </Routes>
     </Router>
       
    </div>
  );
}

export default App;
