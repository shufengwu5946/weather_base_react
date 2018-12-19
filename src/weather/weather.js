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
        let that = this;
        getWeatherByCity("北京", function (data) {
            console.log(data);
            that.setState({ weather: data });
        });
    }

    handleQuery(city) {
        let that = this;
        getWeatherByCity(city, function (data) {
            console.log(data);
            that.setState({ weather: data });
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