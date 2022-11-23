import WeatherSearch from "./WeatherSearch";

import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

export default function App() {
    return (
        <div className="App">
            <div className="container">
                <Card className="App-card">
                    <header>
                        <FontAwesomeIcon icon={faCalendarDay} />{" "}
                        {new Date().toLocaleDateString("en-US", {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        })}
                        <br />
                        <FontAwesomeIcon icon={faClock} />{" "}
                        {new Date().toLocaleTimeString("en-US", {
                            hour12: false,
                        })}
                    </header>
                    <WeatherSearch />
                </Card>
                <div className="App-coder">
                    This project was coded by Amanda Nagao and is{" "}
                    <a
                        href="https://github.com/amandanagao/shecodes-react-project"
                        target="_blank"
                        rel="noreferrer"
                    >
                        open-sourced on GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}
