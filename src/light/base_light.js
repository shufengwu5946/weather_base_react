import React from 'react';
import './style.css';
class BaseLight extends React.Component{

    render(){
        return (
            <div className={`hw ${this.props.light_color}`}></div>
        );
    }
    
}

export default BaseLight;