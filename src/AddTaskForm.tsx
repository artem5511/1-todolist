import React, {useState} from 'react';
import {Button} from './Button';

type AddTaskFormPropsType = {
    addTasks: (title: string) => void
}

export const AddTaskForm = (props: AddTaskFormPropsType) => {

    const [title, setTitle] = useState("")
    const [error, setError] = useState(false)

    const addTaskHandler = () => {
        const trimmedTitle = title.trim()
        if(trimmedTitle !== ''){
            props.addTasks(title)
            setTitle('')
        } else {
            setError(true)
        }
        setTitle('')
    }

    return (
        <div>
            <input
                placeholder='введите текст'
                className={error ? 'task-input-error' : ''}
                value={title}
                onChange={(e) => {setTitle(e.currentTarget.value)
                setError(false)
            }}
                onFocus={() => setTitle('')}
                onKeyDown={(e) => {e.key === 'Enter' && addTaskHandler()}}
            />
            <Button title='+'
                    disabled={title.length < 3 || title.length > 10}
                    onClick={addTaskHandler}
                    // onClick={() => {
                    //     props.addTasks(title)
                    //     setTitle('')
                    // }}
            />
            {title.length < 3 && <div>Нужно 3 и более символов</div>}
            {title.length > 20 && <div>Название слишком длинное</div>}
            {error && <div style={{color: 'red'}}>Введите валидное название</div>}
        </div>
    )
}