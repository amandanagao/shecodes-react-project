import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function displayWeatherForecast(response) {
        setLoaded(true);
        setForecast(response.data.daily);
    }

    function axiosCall() {
        let latitude = props.coordinates.latitude;
        let longitude = props.coordinates.longitude;
        let apiKey = "b220773ot9b8ef196b845b21b5cabb26";
        let unit = "metric";
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=${unit}`;
        axios.get(apiUrl).then(displayWeatherForecast);
    }

    if (loaded) {
        return (
            <div className="WeatherForecast">
                <Container>
                    <Row>
                        {forecast.map((dailyForecast, index) => {
                            if (index > 0 && index < 6) {
                                return (
                                    <Col key={index}>
                                        <WeatherForecastDay
                                            data={dailyForecast}
                                        />
                                    </Col>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </Row>
                </Container>
            </div>
        );
    } else {
        axiosCall();
        return null;
    }
}
