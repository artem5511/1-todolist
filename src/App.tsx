import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';


export type TaskType = {
    id: number
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
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "JS/TS", isDone: false},
        {id: 4, title: "ANGULAR", isDone: false},
    ])

    const [filter, setFilter] = React.useState<FiltervaluesType>('all')

    const changeTodolistFilter = (aaafilter: FiltervaluesType) => {
        setFilter(aaafilter)
    }

    const removeTask = (taskId: number) => {
        const nextState = tasks.filter(t => t.id !== taskId)
        setTasks(nextState)
    }

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
            />

        </div>
    );
}

export default App;
