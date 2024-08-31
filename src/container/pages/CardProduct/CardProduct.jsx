import React, {Component} from "react";
import Counter from "../../../components/Product/Counter";
import { connect } from "react-redux";
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
                <p>Angka: <span>{this.props.count}</span></p>
                <Counter  />
            </div>
        )
    }
}
const mapStatetoProps = (state) => {
    return {
        count: state.totalOrder
    }
}
export default connect(mapStatetoProps)(CardProduct);