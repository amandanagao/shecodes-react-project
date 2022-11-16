import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
                    <Col xs lg="3" className="current-weather">
                        <div className="city-country">
                            <span className="city">{props.info.city}</span>
                            <br />
                            <span className="country">
                                {props.info.country}
                            </span>
                        </div>
                        <WeatherIcon code={props.info.icon} size={64} />
                        <div className="description text-capitalize">
                            {props.info.description}
                        </div>
                    </Col>
                    <Col xs lg="4" className="current-weather">
                        <WeatherTemperature celsius={props.info.temperature} />
                    </Col>
                    <Col xs lg="3" className="current-weather more-info">
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
