import React from 'react';
import {TaskType} from './App';

type ListPropsType = {
    tasks: Array<TaskType>
}
export const List = (props: ListPropsType) => {

    const ListContent:JSX.Element = props.tasks.length
    ? <ul>
            {props.tasks.map((task: TaskType) => {
                return (
                    <li>
                        <input type="checkbox" checked={task.isDone}/>
                        <span>{task.title}</span>
                    </li>
                )
            })
            }
        </ul>
        :  <span>в тудушке тасок нет</span>
    return (
        ListContent
    )
    // const taskListItems: Array<JSX.Element> = props.tasks.map((task: TaskType) => {
    //     return (
    //         <li>
    //             <input type="checkbox" checked={task.isDone}/>
    //             <span>{task.title}</span>
    //         </li>
    //     )
    // })
    // return (
    //     <ul>
    //         {taskListItems}
    //     </ul>
    // )
}