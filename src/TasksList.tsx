import React from 'react';
import {List} from './List';
import {ButtonsBlock} from './ButtonsBlock';
import {FiltervaluesType, TaskType} from './App';

type TasksListPropsType = {
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeTodolistFilter: (filter: FiltervaluesType) => void
    changeTaskStatus: (title: string, newIsDoneValue: boolean) => void
    filter: FiltervaluesType
}

export const TasksList = (props: TasksListPropsType) => {
    return (
        <>
            <List tasks={props.tasks}
                  removeTask={props.removeTask}
                  changeTaskStatus={props.changeTaskStatus}
            />
            <ButtonsBlock
                filter={props.filter}
                buttononClickHandler={props.changeTodolistFilter}/>
        </>
    )
}