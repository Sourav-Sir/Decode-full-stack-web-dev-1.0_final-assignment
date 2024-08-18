import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    componentDidMount() {
        console.log('ClassCounter component mounted');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('ClassCounter component updated');
    }

    componentWillUnmount() {
        console.log('ClassCounter component will unmount');
    }

    render() {
        return (
            <div>
                <h1>Class Counter: {this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default ClassCounter;
