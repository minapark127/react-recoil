import { atom, selector } from 'recoil';

export const toDoState = atom({
  key: 'toDo',
  default: ['1 one', '2 two', '3 three', '4 four', '5 five'],
});
