import React, {Component, Fragment} from "react";

class CardProduct extends Component {
    // state awal
    state = {
        count: 1,
        name: 'Rifal dan '
    }

    // methodnya
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

    render() {
        return (
            <div>
                <p>Angka: <span>{this.state.count}</span></p>
                <div>
                    <button onClick={this.handlePlus}>Tambah</button>
                    <button onClick={this.handleMinus}>Kurang</button>
                </div>
            </div>
        )
    }
}

export default CardProduct;