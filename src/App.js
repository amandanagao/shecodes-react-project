import WeatherSearch from "./WeatherSearch";
import Forecast from "./Forecast";
import Units from "./Units";

import Card from "react-bootstrap/Card";

import "./App.css";

function App() {
    return (
        <div className="App">
            <Card>
                <Card.Header className="header">
                    Wed, 09/11/2022 - 10:12
                </Card.Header>
                <WeatherSearch />
                <Forecast />
                <Units />
            </Card>
            <div className="coder">
                <a href="/">Open-source code</a> by Amanda Nagao
            </div>
        </div>
    );
}

export default App;
