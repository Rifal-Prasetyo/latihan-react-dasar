import React, {Component, Fragment} from "react";
import CardProduct from "../CardProduct/CardProduct";

class Product extends Component {
    // state awal
    state = {
        count: 1,
        name: 'Rifal dan '
    }

    // methodnya
    handleCounterChange = (newValue) => {
        this.setState({
            count: newValue
        });
    }

    render() {
        return (
            <Fragment>
            <div>
                <div>
                <p>Angka dari parent: <span>{this.state.count}</span></p>
                </div>
                <CardProduct onCounterChange={ (newValue) => this.handleCounterChange(newValue) } />
            </div>
            </Fragment>
        )
    }
}

export default Product;