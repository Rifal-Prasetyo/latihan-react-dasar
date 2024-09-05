import React, { Component } from "react";
import Counter from "../../../components/Product/Counter";
import { connect } from "react-redux";
import { RootContext } from "../../Home/Home";
class CardProduct extends Component {
    // state awal


    // state = {
    //     count: 1
    // }
    // methodnya
    // handleCounterChange = (newValue) => {
    //     this.props.onCounterChange(newValue);

    //     this.setState({
    //         count: newValue
    //     });
    // }



    render() {
        return (
            <RootContext.Consumer>
                {
                    value => {
                        return (
                            <div>
                                <p>Angka: <span>{value.state.totalOrder}</span></p>
                                <Counter />
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
// export default connect(mapStatetoProps)(CardProduct);

// Menggunakan Context milik React bawaan
export default CardProduct