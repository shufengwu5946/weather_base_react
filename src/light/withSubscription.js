import React from 'react';
import BaseLight from './base_light';
function withSubscription(WrappedComponent, lightColor) {
    class Result extends React.Component {

        constructor(props){
            super(props);
            this.handleChange = this.handleChange.bind(this);
        }

        componentDidMount(){
            if(this.props.status){
                this.time = setTimeout(this.handleChange, 5000);
            }
        }

        componentDidUpdate(){
            if(this.props.status){
                this.time = setTimeout(this.handleChange, 5000);
            }
        }

        handleChange(){
            this.props.handleChange();
            if (this.time !== null) {
                clearTimeout(this.time);
                this.time = null;
            }
        }

        render() {
            const status = this.props.status;
            const light_color = status?lightColor:'grey';
            return <WrappedComponent light_color = {light_color} {...this.props}> </WrappedComponent>;
        }
    }

    return Result;
}

const Redlight = withSubscription(BaseLight,'red');
const Yellowlight = withSubscription(BaseLight,'yellow');
const Greenlight = withSubscription(BaseLight,'green');

export {Redlight,Yellowlight,Greenlight};