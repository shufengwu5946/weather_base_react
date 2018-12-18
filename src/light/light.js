import React from 'react';
import {Redlight,Yellowlight,Greenlight} from './withSubscription';
class Light extends React.Component{

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            red:true,
            yellow:false,
            green:false
        };
    }


    handleChange(){
        this.setState(
            (prevState)=>{
                if(prevState.red){
                    return {
                        red:false,
                        yellow:true
                    };
                }else if(prevState.yellow){
                    return {
                        yellow:false,
                        green:true
                    };
                }else if(prevState.green){
                    return {
                        red:true,
                        green:false
                    };
                }
            }
        );
        
    }
    render(){
        
        return (
            <div>
                <Redlight status = {this.state.red} handleChange = {this.handleChange}></Redlight>
                <Yellowlight status = {this.state.yellow} handleChange = {this.handleChange}></Yellowlight>
                <Greenlight status = {this.state.green} handleChange = {this.handleChange}></Greenlight>
            </div>
        );
    }
}

export default Light;