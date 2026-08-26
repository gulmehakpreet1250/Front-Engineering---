import { useState } from "react";
import "./Counter.css";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <h1>Counter App</h1>

            <h2>{count}</h2>

            <div className="buttons">
                <button onClick={() => setCount(count + 1)}>
                    Count 1
                </button>

                <button onClick={() => setCount(count + 2)}>
                    Count 2
                </button>

                <button onClick={() => setCount(count + 5)}>
                    Count 5
                </button>
            </div>
        </div>
    );
}

export default Counter;