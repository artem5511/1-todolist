import React from 'react';
import './App.css';
import {Todolist} from './Todolist';


export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
function App() {
    // BLL:
    const title_1 = "What to learn"
    const title_2 = "What to by"

    const tasks_1: Array<TaskType> = [
        {id:1, title: "HTML", isDone:true},
        {id:2, title: "CSS", isDone:true},
        {id:3, title: "JS/TS", isDone:false},
    ]
    const tasks_2: Array<TaskType> = [
        {id:4, title: "COLA", isDone:true},
        {id:5, title: "CHIPS", isDone:true},
        {id:6, title: "MENTOS", isDone:false},
    ]
    // UI:
    return (
        <div className="App">
            <Todolist title={title_1} tasks={tasks_1}/>
            <Todolist title={title_2} tasks={tasks_2}/>
        </div>
    );
}

export default App;
