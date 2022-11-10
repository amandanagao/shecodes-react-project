import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./WeatherSearch.css";

export default function WeatherSearch() {
    const [city, setCity] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        alert(city);
    }

    function updateCity(event) {
        setCity(event.target.value);
    }

    let searchForm = (
        <form onSubmit={handleSubmit}>
            <input
                type="search"
                placeholder="Enter a city"
                onChange={updateCity}
            />
            <button type="submit">Search</button>
        </form>
    );

    return (
        <div className="WeatherSearch">
            {searchForm}
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="3" className="current-weather">
                        <br />
                        <h2>Curitiba</h2>
                        <img
                            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                            alt="sunny"
                        />
                    </Col>
                    <Col xs lg="4" className="current-weather">
                        <div className="current-temperature">20°</div>
                        <div>23° | 17°</div>
                        <div>Sunny</div>
                    </Col>
                    <Col xs lg="3" className="current-weather">
                        <br />
                        <div>Wind Speed: 3km/h</div>
                        <div>Humidity: 60%</div>
                        <div>Precipitation: 30</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
