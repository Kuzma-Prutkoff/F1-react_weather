import React, { Fragment, useState } from "react";
import axios from "axios";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "../styles/Get_Response.css";
import Details_of_weather from "./Details_of_weather";

function Get_Response(props) {
    const [weather, setWeather] = useState([]);
    function sendRequest() {
        const Api_key = "cac460126cab72ab1c36f9240782f47f";
        if (props.myPeriod === '1 day') {
            let requestString = `https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&units=metric&appid=${Api_key}`;
            axios.get(requestString).then(res => {
                setWeather([res.data])
            });

        } else if (props.myPeriod === "5 days") {
            let requestString = `https://api.openweathermap.org/data/2.5/forecast?lat=${props.lat}&lon=${props.lon}&units=metric&appid=${Api_key}`;
            axios.get(requestString).then(res => {
              setWeather(res.data.list)
            });

        } else {
            console.log(`Такой выбор вне диапазона = ${myPeriod}`);
        }
    };

    return (
        <Fragment>
            <Button variant="primary" className="btn-request" onClick={sendRequest}>
                Запрос прогноза погоды
            </Button>
            <Table striped bodered="true" className="response">
                <thead><tr><th>дата и время</th><th>температура, С</th><th>давление, кПа</th><th>ветер, м/с</th><th>Дождь</th></tr></thead>
                <tbody>
                    {props.myPeriod === "5 days" &&
                        weather.map((details, index) => <Details_of_weather key={index} period={props.myPeriod} details={details} />)}
                    {props.myPeriod !== "5 days" &&
                        weather.map((details, index) => <Details_of_weather key={index} period={props.myPeriod} details={details} />)}
                </tbody>
            </Table>
        </Fragment>
    )
};

export default Get_Response;