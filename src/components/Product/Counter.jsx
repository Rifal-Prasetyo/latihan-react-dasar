import React, { Component } from "react";

class Counter extends Component {


    state = {
        count: 1,
        name: 'Rifal dan '
    }
    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        this.setState({
            count: this.state.count + 1
        }, () =>
            this.handleCounterChange(this.state.count)
        );
    }

    handleMinus = () => {
        if(this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            }, () =>
                this.handleCounterChange(this.state.count)
            );
        }
    }
    render () {
        return (
            <div>
            <button onClick={this.handlePlus}>Tambah</button>
            <button onClick={this.handleMinus}>Kurang</button>
        </div>
        )
    }
}


export default Counter;