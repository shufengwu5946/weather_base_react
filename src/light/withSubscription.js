import React from 'react';
export default function withSubscription(WrappedComponent, lightColor, initOrder) {
    class Result extends React.Component{
        
        constructor(props){
            super(props);
            this.state = {status:false,interval:(initOrder*5000)};
            this.tick = this.tick.bind(this);
        }

        componentDidMount(){
            this.time = setTimeout(this.tick,this.state.interval);
        }

        componentWillMount(){
            clearTimeout(this.time);
            this.time = null;
        }

        tick(){
            this.setState((prevState)=>({status:!prevState.status,interval:5000}))
            clearTimeout(this.time);
            this.time = setTimeout(this.tick,this.state.interval);
        }

        render(){
            if(this.state.status){
                console.log('true');
                
                return (
                    <WrappedComponent light_color = {lightColor}></WrappedComponent>
                );
            }else{
                console.log('false');
                return (
                    <WrappedComponent light_color = {'grey'}></WrappedComponent>
                );
            }
            
        }
    }
    return Result;
}
