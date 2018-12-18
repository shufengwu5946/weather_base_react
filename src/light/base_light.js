import React from 'react';
class BaseLight extends React.Component{
    render(){
        return (
            <div>
                {this.props.light_color}
            </div>
        );
    }
}

export default BaseLight;