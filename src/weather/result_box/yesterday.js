import React from 'react';
import Item from './item';
class Yesterday extends React.Component {


    render() {
        const yesterday = this.props.yesterday;
        return (
            <Item content = {yesterday}></Item>
        );
    }
}

export default Yesterday;