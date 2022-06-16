import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

function ToDo({text, category, id}:IToDo){
    const setToDos = useSetRecoilState(toDoState);

    const onClick = (newCategory:IToDo["category"]) => {
        setToDos(oldToDos => {
            const targetIndex = oldToDos.findIndex( toDo => toDo.id === id);
            const oldToDo = oldToDos[targetIndex];
            const newToDo = {...oldToDo, category: newCategory};         
            const newToDos = [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
            return newToDos;
        });
    };

    return (
        <li>
            <span>{text}</span>
            {category !== "TO_DO" && <button onClick={() => onClick("TO_DO")} >To Do</button>}
            {category !== "DOING" && <button onClick={() => onClick("DOING")} >Doing</button>}
            {category !== "DONE" && <button onClick={() => onClick("DONE")} >Done</button>}
        </li>
    );
}

export default ToDo;