import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Categories, categoryState, toDoSelector } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';



function TODOList(){
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);

    const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
        const { currentTarget: { value: newCategory}} = event;
        setCategory(newCategory as Categories);
    }
    return (
        <div>
            <h1>To Do List</h1>
            <hr />

            <select onInput={onInput}>
                <option value={Categories.TO_DO}>To Do</option>
                <option value={Categories.DOING}>Doing</option>
                <option value={Categories.DONE}>Done</option>
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