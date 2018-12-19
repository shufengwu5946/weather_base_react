import React from 'react';
import {Redlight,Yellowlight,Greenlight} from './withSubscription';
class Light extends React.Component{

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            red:true,
            yellow:false,
            green:false
        };
    }

    handleChange(){
        if(this.state.red){
            this.setState({red:false,yellow:true});
        }else if(this.state.yellow){
            this.setState({yellow:false,green:true});
        }else if(this.state.green){
            this.setState({red:true,green:false});
        }
    }

    handleClick(){
        this.handleChange();
    }

    render(){
        
        return (
            <div>
                <button onClick = {this.handleClick}>切换</button>
                <Redlight status = {this.state.red} handleChange = {this.handleChange}></Redlight>
                <Yellowlight status = {this.state.yellow} handleChange = {this.handleChange}></Yellowlight>
                <Greenlight status = {this.state.green} handleChange = {this.handleChange}></Greenlight>
            </div>
        );
    }
}

export default Light;