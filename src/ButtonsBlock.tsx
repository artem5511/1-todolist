import React from 'react';
import {Button} from './Button';
import {FiltervaluesType} from './App';

type ButtonBlockPropsType = {
    buttononClickHandler:  (filter: FiltervaluesType) => void
}
export const ButtonsBlock = (props: ButtonBlockPropsType) => {
    return (
        <>
            <Button title="All" onClick={() => props.buttononClickHandler('all')}/>
            <Button title="Completed" onClick={() => props.buttononClickHandler('active')}/>
            <Button title="Active" onClick={() => props.buttononClickHandler('completed')}/>
        </>
    )
}