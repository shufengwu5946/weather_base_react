import React from 'react';

class Item extends React.Component {
    render() {
        const content = this.props.content;
        return (
            <div>
                <div>日期：{content.ymd}</div>
                <div>星期：{content.week}</div>
                <div>天气：{content.type}</div>
                <div>最高气温：{content.high}</div>
                <div>最低气温：{content.low}</div>
                <div>风向：{content.fx}</div>
                <div>风力：{content.fl}</div>
                <div>空气指数：{content.aqi}</div>
                <div>日出时间：{content.sunrise}</div>
                <div>日落时间：{content.sunset}</div>
                <div>天气描述：{content.notice}</div>
                
            </div>
        );
    }
}

export default Item;