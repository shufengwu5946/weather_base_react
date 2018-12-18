import React from 'react';
import CityInfo from './cityInfo';
import Data from './data';

class Result extends React.Component {


    render() {
        const result = this.props.result;
        return (
            <div>
                <div>今天日期：{result.date}</div>
                <div>系统更新时间：{result.time}</div>
                <hr/>
                <CityInfo cityInfo = {result.cityInfo}></CityInfo>
                <hr/>
                <Data data={result.data}></Data>
                
            </div>
        );
    }
}

export default Result;