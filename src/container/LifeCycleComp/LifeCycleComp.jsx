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
        // setTimeout(() => {

        //     this.setState({
        //         count: 2
        //     });
        // }, 3000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return null
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.group("shouldComponentUpdate");
        // console.log('nextProps:', nextProps); // akan kosong karena tidak ada properti masuk
        console.log('nextState:', nextState); // akan memuliki objek dengan isi state selanjutnya
        console.log('currentState', this.state); // akan memuliki objek dengan isi state sekarang
        if (nextState.count >= 5) {
            return false;
        }
        // kasus seperti ini mempunyai keuntungan untuk optmasi. seperti loading Suatu big data dan sebagainya.
        return true;

    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        console.log('render');
        return (
            <div>
                <button onClick={this.changeCount}>Component Button {this.state.count}</button>
            </div>
        )
    }

}

export default LifeCycleComp;