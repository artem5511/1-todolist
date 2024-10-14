import React from 'react';
import {TodolistHeader} from './TodolistHeader';
import {AddTaskForm} from './AddTaskForm';
import {TasksList} from './TasksList';
import {TaskType} from './App';

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
}

// export function Todolist() {
export const Todolist = (props: TodolistPropsType) => {
    return (
        <div>
            <TodolistHeader title={props.title}/>
            <AddTaskForm/>
            <TasksList tasks={props.tasks}/>
        </div>
    )
}