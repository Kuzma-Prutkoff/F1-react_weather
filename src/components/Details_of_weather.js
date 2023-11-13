import React from "react";

function Details_of_weather(props) {
    console.log("props.period from Details_of_weather", props.period);

    return (
        <tr>
            <td>{ props.period === "5 days" && props.details.dt_txt }
                { props.period !== "5 days" && props.period }
            </td>
            <td>{props.details.main.temp}</td>
            <td>{props.details.main.pressure}</td>
            <td>{props.details.wind.speed}</td>
            <td>{props.details.weather.main}</td>
        </tr>
    )
}

export default Details_of_weather;