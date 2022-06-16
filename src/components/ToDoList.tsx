import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { categoryState, toDoSelector, toDoState } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';



function TODOList(){
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);

    const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
        const { currentTarget: { value: newCategory}} = event;
        setCategory(newCategory);
    }
    return (
        <div>
            <h1>To Do List</h1>
            <hr />

            <select onInput={onInput}>
                <option value="TO_DO">To Do</option>
                <option value="DOING">Doing</option>
                <option value="DONE">Done</option>
            </select>
            <CreateToDo />
            <hr />

            <ul>
                {toDos.map(toDo => <ToDo key={toDo.id} {...toDo}/>)}
            </ul>
        </div>
    );
}

export default TODOList;