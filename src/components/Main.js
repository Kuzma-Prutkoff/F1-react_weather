import React, { Fragment, useState } from "react";

import Select_your_city from "./Select_your_city";
import Period_weather_forecast from "./Period_weather_forecast";
import Get_Response from "./Get_Response";
import "../styles/Main.css";

function Main() {
  // список городов вносим ручками
  const citiesList = {
    cities: [
        {"name": "Moscow", "lat": 55.755826, "lon": 37.617300},
        {"name": "Erevan", "lat": 40.187202, "lon": 44.515209},
        {"name": "Tbilisi", "lat": 41.693803, "lon": 44.801517},
        {"name": "Astana", "lat": 51.165513, "lon": 71.427222},
        {"name": "Ankara", "lat": 39.933363, "lon": 32.859742},
        {"name": "Ashgabat", "lat": 37.96077, "lon": 58.326063},
    ]
  }
  // данные для выбора города и его координат
  const [myCity, setCity] = useState('Moscow');
  let selectedCityDetails = citiesList.cities.filter((city) => city.name == myCity);
  const lat = selectedCityDetails[0].lat;
  const lon = selectedCityDetails[0].lon;
  //данные для выбора периода прогноза погоды
  const [myPeriod, setPeriod] = useState('1 day');

  return (
    <Fragment>
        <div className="col-1">
            <Select_your_city myCity={myCity} setCity={setCity} />
        </div>
        <div className="col-2">
            <Period_weather_forecast myPeriod={myPeriod} setPeriod={setPeriod} />
        </div>
        <div className="col-3">
            <Get_Response lat={lat} lon={lon} myPeriod={myPeriod} />
        </div>
    </Fragment>
  );
};

export default Main;
