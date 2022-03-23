import React, { ChangeEvent, useState } from "react";

type ButtonPropsType = {
    name: string
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {

    const onCLickButtonHandler = () => {
        props.callBack()

}
    

return (

    <button onClick={onCLickButtonHandler}>{props.name}</button>
)
}