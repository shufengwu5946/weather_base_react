import React from 'react';
import Yesterday from './yesterday';
import ForeCast from './forecast';
class Data extends React.Component {

    render() {
        const data = this.props.data;
        return (
            <div>
                <div>湿度：{data.shidu}</div>
                <div>pm2.5：{data.pm25}</div>
                <div>pm10：{data.pm10}</div>
                <div>空气质量：{data.quality}</div>
                <div>温度：{data.wendu}</div>
                <div>感冒指数：{data.ganmao}</div>
                <hr/>
                昨天天气：
                <Yesterday yesterday = {data.yesterday}></Yesterday>
                <hr/>
                天气预报：
                <ForeCast forecast = {data.forecast}></ForeCast>
            </div>
        );
    }
}

export default Data;