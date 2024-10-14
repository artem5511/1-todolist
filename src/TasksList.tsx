import React from 'react';
import {List} from './List';
import {ButtonsBlock} from './ButtonsBlock';
import {FiltervaluesType, TaskType} from './App';

type TasksListPropsType = {
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    changeTodolistFilter: (filter: FiltervaluesType) => void
}

export const TasksList = (props: TasksListPropsType) => {
    return (
        <>
            <List tasks={props.tasks} removeTask={props.removeTask}/>
            <ButtonsBlock buttononClickHandler={props.changeTodolistFilter}/>
        </>
    )
}