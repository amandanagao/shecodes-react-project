import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function displayWeatherForecast(response) {
        console.log(response.data);
        setLoaded(true);
        setForecast(response.data.daily);
    }

    if (loaded) {
        console.log(forecast);
        return (
            <div className="WeatherForecast">
                <Container>
                    <Row>
                        <Col>
                            <WeatherForecastDay data={forecast[1]} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    } else {
        let latitude = props.coordinates.latitude;
        let longitude = props.coordinates.longitude;
        let apiKey = "b220773ot9b8ef196b845b21b5cabb26";
        let unit = "metric";
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=${unit}`;
        axios.get(apiUrl).then(displayWeatherForecast);

        return null;
    }
}
