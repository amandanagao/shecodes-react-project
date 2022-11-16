import WeatherSearch from "./WeatherSearch";
import Forecast from "./Forecast";

import Card from "react-bootstrap/Card";

import "./App.css";

export default function App() {
    return (
        <div className="App">
            <div className="container">
                <Card className="card">
                    <WeatherSearch />
                    <Forecast />
                </Card>
                <div className="coder">
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
