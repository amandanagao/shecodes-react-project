import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherInfo.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="3" className="current-weather more-info">
                        <h2>{props.info.name}</h2>
                        <WeatherIcon code={props.info.icon} />
                    </Col>
                    <Col xs lg="4" className="current-weather">
                        <div className="current-temperature">
                            {props.info.temperature}°
                        </div>
                        <div>23° | 17°</div>
                        <div className="text-capitalize">
                            {props.info.description}
                        </div>
                    </Col>
                    <Col xs lg="3" className="current-weather more-info">
                        <div>Feels Like: {props.info.feels}°</div>
                        <div>Wind Speed: {props.info.wind}km/h</div>
                        <div>Humidity: {props.info.humidity}%</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
