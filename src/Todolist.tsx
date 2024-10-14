import React from 'react';
import {TodolistHeader} from './TodolistHeader';
import {AddTaskForm} from './AddTaskForm';
import {TasksList} from './TasksList';
import {FiltervaluesType, TaskType} from './App';

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeTodolistFilter: (filter: FiltervaluesType) => void
    addTasks: (title: string) => void
    changeTaskStatus: (title: string, newIsDoneValue: boolean) => void
    filter: FiltervaluesType
}


// export function Todolist() {
export const Todolist = (props: TodolistPropsType) => {
    return (
        <div>
            <TodolistHeader title={props.title}/>
            <AddTaskForm addTasks={props.addTasks}/>
            <TasksList
                filter={props.filter}
                tasks={props.tasks}
                removeTask={props.removeTask}
                changeTodolistFilter={props.changeTodolistFilter}
                changeTaskStatus={props.changeTaskStatus}
            />
        </div>
    )
}