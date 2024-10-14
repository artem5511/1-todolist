import React from 'react';
import {Button} from './Button';
import {FiltervaluesType} from './App';

type ButtonBlockPropsType = {
    buttononClickHandler: (filter: FiltervaluesType) => void
    filter: FiltervaluesType
}
export const ButtonsBlock = (props: ButtonBlockPropsType) => {
    return (
        <>
            <Button
                classes={props.filter === 'all' ? 'filter-button-all' : ''}
                title="All"
                onClick={() => props.buttononClickHandler('all')}
            />
            <Button
                classes={props.filter === 'active' ? 'filter-button-active' : ''}
                title="Completed"
                onClick={() => props.buttononClickHandler('active')}
            />
            <Button
                classes={props.filter === 'completed' ? 'filter-button-completed' : ''}
                title="Active"
                onClick={() => props.buttononClickHandler('completed')}
            />
        </>
    )
}