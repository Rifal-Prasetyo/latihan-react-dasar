import React, {Component, Fragment} from "react";
import Counter from "../../../components/Product/Counter";

class CardProduct extends Component {
    // state awal


    state = {
        count: 1
    }
    // methodnya
    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);

        this.setState({
            count: newValue
        });
    }



    render() {
        return (
            <div>
                <p>Angka: <span>{this.state.count}</span></p>
                <Counter onCounterChange={ (newValue) => this.handleCounterChange(newValue) } />
            </div>
        )
    }
}

export default CardProduct;