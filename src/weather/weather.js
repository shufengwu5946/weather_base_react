import React from 'react';
import Search from './search';
import Result from './result_box/result';
import getWeatherByCity from './fetch/fetch';
class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.handleQuery = this.handleQuery.bind(this);
        this.state = { weather: "" };
    }

    componentDidMount() {
        getWeatherByCity("北京", (data) =>{
            this.setState({ weather: data });
        });
    }

    handleQuery(city) {
        getWeatherByCity(city, (data) =>{
            this.setState({ weather: data });
        });
    }

    render() {
        return (
            <div>
                <Search handleQuery={this.handleQuery}></Search>
                {this.state.weather && this.state.weather.status === 200 &&
                    <Result result={this.state.weather}></Result>
                }
            </div>
        );
    }

}

export default Weather;