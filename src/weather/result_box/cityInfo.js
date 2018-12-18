import React from 'react';
class CityInfo extends React.Component {

    render() {
        const cityInfo = this.props.cityInfo;
        return (
            <div>
                <div>城市：{cityInfo.city}</div>
                <div>所属省份：{cityInfo.parent}</div>
                <div>天气更新时间：{cityInfo.updateTime}</div>
            </div>
        );
    }
}

export default CityInfo;