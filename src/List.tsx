import React from 'react';
import {TaskType} from './App';
import {Button} from './Button';

type ListPropsType = {
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeTaskStatus: (title: string, newIsDoneValue: boolean) => void
}
export const List = (props: ListPropsType) => {

    const ListContent: JSX.Element = props.tasks.length
        ? <ul>
            {props.tasks.map((task: TaskType) => {
                return (
                    <li>
                        <input type="checkbox"
                               checked={task.isDone}
                               onChange={e => props.changeTaskStatus(task.id, e.currentTarget.checked)}
                        />
                        <span className={task.isDone ? 'task-done' : 'task'}>{task.title}</span>
                        <Button
                            title={'x'}
                            onClick={() => {
                            props.removeTask(task.id)
                        }}/>
                    </li>
                )
            })
            }
        </ul>
        : <span>в тудушке тасок нет</span>
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