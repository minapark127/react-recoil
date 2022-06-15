import { useRecoilValue } from 'recoil';
import { toDoState } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';



function TODOList(){
    const toDos = useRecoilValue(toDoState);
    return (
        <div>
            <h1>To Do List</h1>
            <CreateToDo />

            <ul>
                {toDos.map(toDo => <ToDo key={toDo.id} {...toDo}/>)}
            </ul>
        </div>
    );
}

export default TODOList;