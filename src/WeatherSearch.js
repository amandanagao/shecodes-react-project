import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ColorRing } from "react-loader-spinner";

import "./WeatherSearch.css";

export default function WeatherSearch() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState({ ready: false });

    function axiosCall() {
        let apiKey = "b220773ot9b8ef196b845b21b5cabb26";
        let unit = "metric";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;
        axios.get(apiUrl).then(displayWeather);
    }

    function handleSubmit(event) {
        event.preventDefault();
        axiosCall();
    }

    function displayWeather(response) {
        setWeather({
            ready: true,
            date: new Date(response.data.time * 1000),
            city: response.data.city,
            country: response.data.country,
            coordinates: response.data.coordinates,
            icon: response.data.condition.icon,
            description: response.data.condition.description,
            temperature: Math.round(response.data.temperature.current),
            feels: Math.round(response.data.temperature.feels_like),
            humidity: response.data.temperature.humidity,
            wind: Math.round(response.data.wind.speed),
        });
    }

    function updateCity(event) {
        setCity(event.target.value);
    }

    let searchForm = (
        <form onSubmit={handleSubmit}>
            <InputGroup className="search-form" onChange={updateCity}>
                <Form.Control placeholder="Enter a city" />
                <Button type="submit" variant="outline-secondary">
                    Search
                </Button>
            </InputGroup>
        </form>
    );

    if (weather.ready) {
        return (
            <div className="WeatherSearch">
                <header>
                    <FormattedDate date={weather.date} />
                </header>
                {searchForm}
                <WeatherInfo info={weather} />
                <WeatherForecast coordinates={weather.coordinates} />
            </div>
        );
    } else {
        return (
            <div className="WeatherSearch">
                {searchForm}
                <h2>Please enter a city</h2>
                <div className="loader">
                    <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={[
                            "#77aac4",
                            "#588faa",
                            "#407088",
                            "#345a6d",
                            "#39647a",
                        ]}
                    />
                </div>
            </div>
        );
    }
}
