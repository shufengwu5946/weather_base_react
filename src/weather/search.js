import React from 'react';
class Search extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlechange = this.handlechange.bind(this);
        this.state = { city: "北京" };
    }

    handlechange(event) {
        this.setState({ city: event.target.value });
    }
    handleSubmit(event) {
        this.props.handleQuery(this.state.city);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handlechange} value={this.state.city}/>
                <input type="submit" value="查询" />
            </form>
        );
    }
}

export default Search;