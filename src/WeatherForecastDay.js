import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
    function day() {
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();
        return days[day];
    }

    function maxTemperature() {
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}°`;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}°`;
    }

    return (
        <div className="WeatherForecastDay">
            <div className="WeatherForecastDay-day">{day()}</div>
            <span className="WeatherForecastDay-icon">
                <WeatherIcon code={props.data.condition.icon} size={36} />
            </span>
            <div className="WeatherForecastDay-temperature">
                <span className="WeatherForecastDay-temperature-max">
                    {maxTemperature()}
                </span>
                <span className="WeatherForecastDay-temperature-min">
                    {minTemperature()}
                </span>
            </div>
        </div>
    );
}
