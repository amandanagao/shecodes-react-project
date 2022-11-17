import React, { useState } from "react";

import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function fahrenheit() {
        return Math.round((props.celsius * 9) / 5 + 32);
    }

    if (unit === "celsius") {
        return (
            <div className="WeatherTemperature">
                <div className="WeatherTemperature-current-temperature">
                    {props.celsius}
                </div>
                <div className="WeatherTemperature-units">
                    °C{" "}
                    <a href="/" onClick={showFahrenheit}>
                        | °F
                    </a>
                </div>
            </div>
        );
    } else {
        return (
            <div className="WeatherTemperature">
                <div className="WeatherTemperature-current-temperature">
                    {fahrenheit()}
                </div>
                <div className="WeatherTemperature-units">
                    <a href="/" onClick={showCelsius}>
                        °C |
                    </a>{" "}
                    °F
                </div>
            </div>
        );
    }
}
