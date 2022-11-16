import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    function displayWeatherForecast(response) {}

    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiKey = "b220773ot9b8ef196b845b21b5cabb26";
    let unit = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(displayWeatherForecast);

    return (
        <div className="WeatherForecast">
            <Container>
                <Row>
                    <Col>
                        <div className="WeatherForecast-day">Thu</div>
                        <WeatherIcon code={"clear-sky-day"} size={36} />
                        <div className="WeatherForecast-temperature">
                            <span className="WeatherForecast-temperature-max">
                                29°
                            </span>
                            <span className="WeatherForecast-temperature-min">
                                20°
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
