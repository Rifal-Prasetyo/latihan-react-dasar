import React, { Component, Fragment } from "react";
import CardProduct from "../CardProduct/CardProduct";
import { GlobalConsumer } from "../../../context/context";
class Product extends Component {
    // state awal
    // state = {
    //     count: 1,
    //     name: 'Rifal dan '
    // }

    // methodnya
    handleCounterChange = (newValue) => {
        this.setState({
            count: newValue
        });
    }

    render() {
        console.log(this.props);
        return (
            <Fragment>
                <div>
                    <div>
                        <p>Angka dari parent: <span>{this.props.state.totalOrder}</span></p>
                    </div>
                    <CardProduct />
                </div>
            </Fragment>
        )
    }
}
// const mapStatetoProps = (state) => {
//     return {
//         count: state.totalOrder
//     }
// }
// export default connect(mapStatetoProps)(Product);

// Menggunakan Context milik React bawaan
export default GlobalConsumer(Product);