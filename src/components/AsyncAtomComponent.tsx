'use client';
import { useAtom } from 'jotai';
import React from 'react';
import { asyncAtom } from '../atoms';

interface AsyncAtomComponentProps {}

const AsyncAtomComponent = ({}: AsyncAtomComponentProps) => {
  const [asyncResult] = useAtom(asyncAtom);

  return (
    <div>
      <div>{asyncResult.text}</div>
      <div></div>
    </div>
  );
};

export default AsyncAtomComponent;
