import React, { Component } from "react";

class LifeCycleComp extends Component {

    // REACT LIFE CYCLE METHOD FLOw
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
        console.log('constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return null
    }
    componentDidMount() {
        console.log('componentDidMount');
        setTimeout(() => {

            this.setState({
                count: 2
            });
        }, 3000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return null
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        console.log('render');
        return (
            <div>
                <button>Component Button {this.state.count}</button>
            </div>
        )
    }

}

export default LifeCycleComp;