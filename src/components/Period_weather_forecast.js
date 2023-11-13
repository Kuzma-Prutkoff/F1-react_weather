import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";
import "../styles/Period_weather_forecast.css";

function Period_weather_forecast(props) {
    return (
        <Fragment>
            <h3>Выберите за какой период времени тебе нужна погода</h3>
            <Form.Select className="periods" onClick={e => props.setPeriod(e.target.value)}>
                <option value="1 day">Прогноз на 1 день</option>
                <option value="5 days">Прогноз на 5 дней</option>
            </Form.Select>
            <p>Ты выбрал период прогноза погоды "{props.myPeriod}"</p>
        </Fragment>
    )
};

export default Period_weather_forecast;
