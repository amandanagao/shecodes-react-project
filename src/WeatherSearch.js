import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import "./WeatherSearch.css";

export default function WeatherSearch() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState({ ready: false });

    function handleSubmit(event) {
        event.preventDefault();
        let apiKey = "b220773ot9b8ef196b845b21b5cabb26";
        let unit = "metric";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;
        axios.get(apiUrl).then(displayWeather);
    }

    function displayWeather(response) {
        console.log(response);
        setWeather({
            ready: true,
            date: new Date(response.data.time * 1000),
            name: response.data.city,
            iconUrl: response.data.condition.icon_url,
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
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs lg="3" className="current-weather more-info">
                            <h2>{weather.name}</h2>
                            <img
                                src={weather.iconUrl}
                                alt={weather.description}
                            />
                        </Col>
                        <Col xs lg="4" className="current-weather">
                            <div className="current-temperature">
                                {weather.temperature}°
                            </div>
                            <div>23° | 17°</div>
                            <div className="text-capitalize">
                                {weather.description}
                            </div>
                        </Col>
                        <Col xs lg="3" className="current-weather more-info">
                            <div>Feels Like: {weather.feels}°</div>
                            <div>Wind Speed: {weather.wind}km/h</div>
                            <div>Humidity: {weather.humidity}%</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    } else {
        return (
            <div className="WeatherSearch">
                {searchForm}
                <h3>Loading...</h3>
            </div>
        );
    }
}
