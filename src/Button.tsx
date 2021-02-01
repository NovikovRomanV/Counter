import React from "react";
import s from "./Button.module.css"

type PropsType = {
    text: string
    onClick: () => void
    value: number
    maxValue: number
    minValue: number
}

export const ButtonComponent = (props: PropsType) => {
    const classCssAdd = props.text === "Add" && props.value === props.maxValue ? s.buttonOpacity : "";
    const classCssDel = props.text === "Del" && props.value === props.minValue ? s.buttonOpacity : "";
    return (
        <div>
            <span className={`${s.button} ${classCssAdd} ${classCssDel}`} onClick={props.onClick}>{props.text}</span>
        </div>
    )
}