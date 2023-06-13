import { atom } from 'jotai';

interface TodoAtomInterface {
  id: number;
  subject: string;
  done: boolean;
}

const initialState: TodoAtomInterface[] = [
  {
    id: 0,
    subject: '이은희',
    done: false,
  },
  {
    id: 1,
    subject: '손흥민',
    done: false,
  },
  {
    id: 2,
    subject: '제이팍',
    done: false,
  },
  {
    id: 3,
    subject: '봉준호',
    done: false,
  },
];

export const todoAtom = atom<TodoAtomInterface[]>(initialState);

export const idAtom = atom(9001);

export const asyncAtom = atom(async (get) => {
  const id = get(idAtom);
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
  );
  return await response.json();
});
