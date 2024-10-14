import React from 'react';
import {TodolistHeader} from './TodolistHeader';
import {AddTaskForm} from './AddTaskForm';
import {TasksList} from './TasksList';
import {FiltervaluesType, TaskType} from './App';

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    changeTodolistFilter: (filter: FiltervaluesType) => void
}


// export function Todolist() {
export const Todolist = (props: TodolistPropsType) => {
    return (
        <div>
            <TodolistHeader title={props.title}/>
            <AddTaskForm/>
            <TasksList
                tasks={props.tasks}
                removeTask={props.removeTask}
                changeTodolistFilter={props.changeTodolistFilter}/>
        </div>
    )
}