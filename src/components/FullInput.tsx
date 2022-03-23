import React, { ChangeEvent, useState } from "react";

type ClickButton = {
    onClickButton: (title: string) => void
}

export const FullInput = (props: ClickButton) => {
    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const ClickButtonFullInput = () => {
        props.onClickButton(title)
        setTitle(' ')
    }

    return (
        <div>
            <input value={title} id="132" onChange={onChangeInputHandler} />
            <button className="button2 b-blue rot-135" onClick={ClickButtonFullInput}>Save</button>
        </div>
    )
}