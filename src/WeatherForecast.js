import React from "react";
import WeatherIcon from "./WeatherIcon";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./WeatherForecast.css";

export default function WeatherForecast() {
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
