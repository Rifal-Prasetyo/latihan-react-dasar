import React, { Component } from "react";
import { connect } from "react-redux";
import ActionType from "../../redux/reducer/globalActionType";
import { RootContext } from "../../container/Home/Home";
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
            <RootContext.Consumer>
                {
                    value => {
                        return (
                            <div>
            <button onClick={() => null}>Tambah</button>
            <p>Angka: <span>{value.totalOrder}</span></p>
            <button onClick={() => null}>Kurang</button>
        </div>
                        )
                    }
                }
            
        </RootContext.Consumer>
        )
    }
}

// const mapStatetoProps = (state) => {
//     return {
//         count: state.totalOrder
//     }
// }

// const mapDispacthToProps = (dispatch) => {
//     return {
//         handlePlus: () => dispatch({type: ActionType.ADD_ORDER}),
//         handleMinus: () => {dispatch({type: ActionType.MINUS_ORDER})} 
//     }
// }
// export default connect(mapStatetoProps, mapDispacthToProps)(Counter);

// menggunakan Context milik React bawaan
export default Counter