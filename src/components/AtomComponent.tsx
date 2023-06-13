'use client';
import { useAtom } from 'jotai';
import { todoAtom } from '../atoms';
import React from 'react';

interface AtomComponentProps {}

const AtomComponent = ({}: AtomComponentProps) => {
  const [todos, setTodos] = useAtom(todoAtom);
  return (
    <div>
      <div>{todos.map((todo) => todo.subject)}</div>
    </div>
  );
};

export default AtomComponent;
