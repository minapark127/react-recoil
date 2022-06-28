import { atom, selector } from 'recoil';

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: 'toDo',
  default: {
    'To Do': ['1 one', '2 two'],
    Doing: ['3 three', '4 four', '5 five'],
    Done: ['6 six'],
  },
});
