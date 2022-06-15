import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { toDoState } from '../atoms';

interface IForm {
    toDo: string;
}


function CreateToDo(){
    const setToDos = useSetRecoilState(toDoState)
    const { register, handleSubmit, setValue} = useForm<IForm>();

    const handleValid = (data:IForm) => {
        setValue('toDo', '');
        setToDos(prev => [{text: data.toDo, id: Date.now(), category: 'TO_DO'}, ...prev]);
    }

    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <input 
            {...register('toDo',{
                required: 'Please write a To Do'
            })} 
            type="text" placeholder="Write a to do" />
            <button>Add</button>
        </form>
    );
}

export default CreateToDo;