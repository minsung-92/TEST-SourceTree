import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const users = this.props.users;
        const number = this.props.number;
        return (
            <div>
                <ul>
                {users
                .map(user => <li>{user.name}</li>)
                }
            </ul>
            <h1>ddsds{number}</h1>
            <button onClick={this.props.addNumber}>카운트 증가</button>
            </div>
        );
    }
}

export default Test;