import React from 'react';

type PropsType = {
    title: string
    onClick?: () => void
    disabled? : boolean
    classes?: string
}
export const Button = (props: PropsType) => {
    return (
        <button
            className={props.classes}
            onClick={props.onClick}

        >{props.title}</button>
    )
}