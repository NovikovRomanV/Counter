import React, {useState} from 'react';
import './App.css';
import {ButtonComponent} from "./Button";

function App() {
    let maxValue = 5
    let minValue = 0
    const [value, setValue] = useState(0)
    const add = (value: number) => {
        if (value === maxValue) {
            return
        } else {
            setValue(value + 1)
        }
    }
    const del = (value: number) => {
        if (value === minValue) {
            return
        } else {
            setValue(0)
        }
    }

    return (
        <div className="App">
            <div className="container">
                <div className={`${"input"} ${value === maxValue ? "redInput" : ""}`}>
                    {value}
                </div>
                <div className="containerButton">
                    <ButtonComponent onClick={() => {
                        add(value)
                    }} text={"Add"} value={value} maxValue={maxValue} minValue={minValue}/>
                    <ButtonComponent onClick={() => {
                        del(value)
                    }} text={"Del"} value={value} maxValue={maxValue} minValue={minValue}/>
                </div>
            </div>
        </div>
    );
}

export default App;
