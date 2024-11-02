import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import {ChangeEvent, useState} from "react";


type Props = {
    oldTitle: string
    addItem:(title: string)=>void
};
export const EditableSpan = ({oldTitle,addItem}: Props) => {
    const [edit, setEdit] = useState(false);
    const [newTitle, setNewTitle] = useState(oldTitle)

    const editHandler=()=>{
        setEdit(!edit)
        if(edit){
            addItemHandler()
        }

    }

    const onChangeHandler=(event: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.currentTarget.value)
    }

    const addItemHandler = () => {
        addItem(newTitle)
    }

    return (
        edit
            ? <input
            autoFocus={true}
                value={newTitle}
                onBlur={editHandler}
                onChange={onChangeHandler}
            />
            : <span onDoubleClick={editHandler}>{oldTitle}</span>

    );
};