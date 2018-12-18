import React from 'react';
import withSubscription from './withSubscription';
import BaseLight from './base_light';
class Light extends React.Component{
    render(){
        const Redlight = withSubscription(BaseLight,'red',0);
        const Yellowlight = withSubscription(BaseLight,'yellow',1);
        const Greenlight = withSubscription(BaseLight,'green',2);
        return (
            <div>
                <Redlight></Redlight>
                <Yellowlight></Yellowlight>
                <Greenlight></Greenlight>
            </div>
        );
    }
}

export default Light;