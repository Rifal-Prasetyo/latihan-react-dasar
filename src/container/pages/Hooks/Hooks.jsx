import React, { useState } from "react";

const Hooks = () => {
    const [count, setCount] = useState(0);
    return (
        <div > 
            <p>Angka Update: {count}</p>
            <button onClick={() => setCount(count + 1)}>Update nilai</button>
        </div>
    )
}

export default Hooks;