import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherInfo.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="3" className="WeatherInfo-current-weather">
                        <div className="WeatherInfo-city-country">
                            <span className="WeatherInfo-city">
                                {props.info.city}
                            </span>
                            <br />
                            <span className="WeatherInfo-country">
                                {props.info.country}
                            </span>
                        </div>
                        <WeatherIcon code={props.info.icon} size={64} />
                        <div className="WeatherInfo-description text-capitalize">
                            {props.info.description}
                        </div>
                    </Col>
                    <Col xs lg="4" className="WeatherInfo-current-weather">
                        <div>
                            <span className="WeatherInfo-temperature">
                                {props.info.temperature}
                            </span>
                            <span className="WeatherInfo-unit">°C</span>
                        </div>
                        <div className="WeatherInfo-feels">
                            Feels Like: {props.info.feels}°
                        </div>
                    </Col>
                    <Col
                        xs
                        lg="3"
                        className="WeatherInfo-current-weather WeatherInfo-more-info"
                    >
                        <div>
                            <FontAwesomeIcon icon={faWind} /> {props.info.wind}
                            km/h
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faDroplet} />{" "}
                            {props.info.humidity}%
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
