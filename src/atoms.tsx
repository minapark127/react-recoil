import { atom, selector } from 'recoil';

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: 'toDo',
  default: {
    to_do: ['1 one', '2 two'],
    doing: ['3 three', '4 four', '5 five'],
    done: ['6 six'],
  },
});
