import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {


    // state = {
    //     count: 1,
    //     name: 'Rifal dan '
    // }
    // handleCounterChange = (newValue) => {
    //     this.props.onCounterChange(newValue);
    // }

    // handlePlus = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //     }, () =>
    //         this.handleCounterChange(this.state.count)
    //     );
    // }

    // handleMinus = () => {
    //     if(this.state.count > 0) {
    //         this.setState({
    //             count: this.state.count - 1
    //         }, () =>
    //             this.handleCounterChange(this.state.count)
    //         );
    //     }
    // }
    render () {
        // console.log(this.props);
        return (
            <div>
            <button onClick={this.props.handlePlus}>Tambah</button>
            <p>Angka: <span>{this.props.count}</span></p>
            <button onClick={this.props.handleMinus}>Kurang</button>
        </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        count: state.totalOrder
    }
}

const mapDispacthToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({type: "ADD_ORDER"}),
        handleMinus: () => {dispatch({type: "MINUS_ORDER"})} 
    }
}
export default connect(mapStatetoProps, mapDispacthToProps)(Counter);