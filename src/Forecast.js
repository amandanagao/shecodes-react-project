import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Forecast.css";

export default function Forecast() {
    return (
        <div className="Forecast">
            <Container>
                <Row>
                    <Col>
                        <img
                            src="https://ssl.gstatic.com/onebox/weather/48/cloudy_s_rain.png"
                            alt="weather icon"
                        ></img>
                        <div>28° | 19°</div>
                        <div>Thu</div>
                    </Col>
                    <Col>
                        <img
                            src="https://ssl.gstatic.com/onebox/weather/48/cloudy_s_rain.png"
                            alt="weather icon"
                        ></img>
                        <div>28° | 19°</div>
                        <div>Fri</div>
                    </Col>
                    <Col>
                        <img
                            src="https://ssl.gstatic.com/onebox/weather/48/cloudy_s_rain.png"
                            alt="weather icon"
                        ></img>
                        <div>28° | 19°</div>
                        <div>Sat</div>
                    </Col>
                    <Col>
                        <img
                            src="https://ssl.gstatic.com/onebox/weather/48/cloudy_s_rain.png"
                            alt="weather icon"
                        ></img>
                        <div>28° | 19°</div>
                        <div>Sun</div>
                    </Col>
                    <Col>
                        <img
                            src="https://ssl.gstatic.com/onebox/weather/48/cloudy_s_rain.png"
                            alt="weather icon"
                        ></img>
                        <div>28° | 19°</div>
                        <div>Mon</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
