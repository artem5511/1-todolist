import React from 'react';

type PropsType = {
    title: string
    onClick?: () => void
}
export const Button = (props: PropsType) => {
    return (
        <button onClick={props.onClick}>{props.title}</button>
    )
}