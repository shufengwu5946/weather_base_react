import React from 'react';
import Item from './item';

class ForeCast extends React.Component {
    render() {
        const forecast = this.props.forecast;
        return (
            forecast.map((value, index) => (
                <div key={index}>
                    <Item content={value} ></Item>
                    <br/>
                    <br/>
                </div>
            )
            )
        );
    }
}

export default ForeCast;