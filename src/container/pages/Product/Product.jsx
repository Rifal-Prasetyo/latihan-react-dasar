import React, {Component, Fragment} from "react";
import CardProduct from "../CardProduct/CardProduct";
import { connect } from "react-redux";
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
        return (
            <Fragment>
            <div>
                <div>
                <p>Angka dari parent: <span>{0}</span></p>
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
export default Product;