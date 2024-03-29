import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ColorRing } from "react-loader-spinner";
import Swal from "sweetalert2";

import "./WeatherSearch.css";

export default function WeatherSearch() {
    const [city, setCity] = useState({});
    const [weather, setWeather] = useState({ ready: false });

    function axiosCall() {
        let apiKey = "45bb2b01d47a7c6f32fb06dd72181ea6";
        let unit = "metric";
        let apiUrl = `https:///api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${apiKey}&units=${unit}`;
        axios.get(apiUrl).then(displayWeather).catch(errorCheck);
    }

    function errorCheck(error) {
        let returnObject = error.response.data.cod;
        if (returnObject === "404") {
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Please enter a valid city!",
            });
            setWeather({ ready: false });
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (city.flag === true) {
            axiosCall();
        } else {
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Please enter a city!",
            });
            setCity({ name: "", flag: false });
            setWeather({ ready: false });
        }
    }

    function displayWeather(response) {
        setWeather({
            ready: true,
            date: new Date(response.data.dt * 1000),
            city: response.data.name,
            country: response.data.sys.country,
            coordinates: response.data.coord,
            feels: Math.round(response.data.main.feels_like),
            icon: response.data.weather[0].icon,
            description: response.data.weather[0].description,
            temperature: Math.round(response.data.main.temp),
            humidity: response.data.main.humidity,
            wind: Math.round(response.data.wind.speed),
        });
    }

    function updateCity(event) {
        if (event.target.value.trim().length !== 0) {
            setCity({ name: event.target.value, flag: true });
        } else {
            setCity({ name: "", flag: false });
        }
    }

    let searchForm = (
        <form onSubmit={handleSubmit}>
            <InputGroup
                className="WeatherSearch-search-form"
                onChange={updateCity}
            >
                <Form.Control placeholder="Enter a city" autoFocus />
                <Button type="submit" variant="outline-secondary">
                    Search
                </Button>
            </InputGroup>
        </form>
    );

    if (weather.ready) {
        return (
            <div className="WeatherSearch">
                {searchForm}
                <WeatherInfo info={weather} />
                <WeatherForecast coordinates={weather.coordinates} />
                <div
                    style={{
                        textAlign: "center",
                        opacity: 0.7,
                        fontSize: "15px",
                    }}
                >
                    Last Updated: <FormattedDate date={weather.date} />
                </div>
            </div>
        );
    } else {
        return (
            <div className="WeatherSearch">
                {searchForm}
                <h2>Please enter a city</h2>
                <div className="WeatherSearch-loader">
                    <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={[
                            "#F46672",
                            "#E58890",
                            "#F697A3",
                            "#EFBBAD",
                            "#EFDCD8",
                        ]}
                    />
                </div>
            </div>
        );
    }
}
