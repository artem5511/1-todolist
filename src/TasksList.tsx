import React from 'react';
import {List} from './List';
import {ButtonsBlock} from './ButtonsBlock';
import {TaskType} from './App';

type TasksListPropsType = {
    tasks: Array<TaskType>
}
export const TasksList = (props: TasksListPropsType) => {
    return (
        <>
           <List tasks={props.tasks}/>
           <ButtonsBlock/>
        </>
    )
}