import "./Counter.css"
import {useState} from "react";

export default function Counter() {
    const [counter, setCounter] = useState<number>(1)

// console.log(counter)
    function onButtonClick(operation:string) {


        // console.log(buttonText)

        if (operation === "+") {
            setCounter(counter + 1)
        }
        else if (operation === "-") {
            setCounter(counter - 1)
        }
        // console.log(counter)
    }

    return <div className={"main counter"}>
        <h3>Counter</h3>
        <div>
            <button onClick={() => onButtonClick("+")}>+</button>
            <button onClick={() => onButtonClick("-")}>-</button>
        </div>
        <p>{counter >= 3 && counter}</p>
        <p>{counter  === 5 || counter === 7 ? "Counter is prime" : counter}</p>
    </div>
}