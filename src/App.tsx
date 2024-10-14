import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';
import {getNextKeyDef} from '@testing-library/user-event/dist/keyboard/getNextKeyDef';


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FiltervaluesType = 'all' | 'active' | 'completed'

function App() {
    // BLL:
    const title_1 = "What to learn"
    const title_2 = "What to by"
    // const tasks: Array<TaskType> = [
    //     {id:1, title: "HTML", isDone:true},
    //     {id:2, title: "CSS", isDone:true},
    //     {id:3, title: "JS/TS", isDone:false},
    // ]

    const [tasks, setTasks] = useState([
        {id: v1(), title: "HTML", isDone: true},
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "JS/TS", isDone: false},
        {id: v1(), title: "ANGULAR", isDone: false},
    ])

    const [filter, setFilter] = React.useState<FiltervaluesType>('all')
//filter
    const changeTodolistFilter = (aaafilter: FiltervaluesType) => {
        setFilter(aaafilter)
    }
//tasks
    const removeTask = (taskId: string) => {
        const nextState = tasks.filter(t => t.id !== taskId)
        setTasks(nextState)
    }
    const addTasks = (title: string) => {
            const newTask = {
                id: v1(),
                title: title,
                isDone: false,
            }
            const newTasks = [newTask, ...tasks]
            setTasks(newTasks)

    }

    const changeTaskStatus = (taskId: string, newIsDoneValue: boolean) => {
      const nextState: Array<TaskType> = tasks.map(t => t.id === taskId ? {...t, isDone: newIsDoneValue}: t)
          setTasks(nextState)
    }
//UI logic
    const getFilteredTasks = (allTasks: Array<TaskType>, filterValue: FiltervaluesType) => {
        switch (filterValue) {
            // case "all":
            //     return allTasks
            case "active":
                return allTasks.filter(t=> !t.isDone)
            case "completed":
                return allTasks.filter(t=> t.isDone)
            default:
                return allTasks
        }
    }
    return (
        <div className="App">
            <Todolist
                title={title_1}
                tasks={getFilteredTasks(tasks,filter)}
                removeTask={removeTask}
                changeTodolistFilter={changeTodolistFilter}
                addTasks={addTasks}
                changeTaskStatus={changeTaskStatus}
                filter={filter}
            />
        </div>
    );
}

export default App;
