import React, { useEffect, useState } from "react";

// state full component / class component
// class Hooks extends React.Component {
//     state = {
//         count: 0
//     }

//     onUpdate = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     // LIFECYCLE STATEFULL COMPONENT 
//     // diesksekui ketika render sudah selesai
//     componentDidMount() {
//         document.title = `Title Change - ${this.state.count}`
//     }
//     // dieksekusi ketika terjadi perubahan pada render
//     componentDidUpdate() {
//         document.title = `Title Change - ${this.state.count}`
//     }

//     // dieksekusi ketika component akan di hapus
//     componentWillUnmount(){
//         document.title = "React App"
//     }

//     render () {
//         return (
//         <div > 
//             <p>Angka Update: {this.state.count}</p>
//             <button onClick={this.onUpdate}>Update nilai</button>
//         </div>  
//         )
//     }
    
// }

// state less componnet / functional component
const Hooks = () => {
    const [count, setCount] = useState(0);

    // dari LIFECYCLE tadi dalam functional component. kita dapat menggunakan useEffect
    useEffect(() => {
        // lifecycle componentDidMount dan ComponentDidUpdate akan bisa dilakukan dengan mudah seperti ini
        document.title = `Title Change - ${count}`
        // lifecycle componentWillUnmount dapat dibuat dengan cara ini
        return () => {
            document.title = "React App"
        }
    });
    return (
        <div > 
            <p>Angka Update: {count}</p>
            <button onClick={() => setCount(count + 1)}>Update nilai</button>
        </div>
    )
}

export default Hooks;