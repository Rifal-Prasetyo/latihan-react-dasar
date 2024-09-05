import React, { Component } from "react";
import Counter from "../../../components/Product/Counter";
import { GlobalConsumer } from "../../../context/context";
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
            <div>
                <p>Angka: <span>{this.props.state.totalOrder}</span></p>
                <Counter />
            </div>
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
export default GlobalConsumer(CardProduct)