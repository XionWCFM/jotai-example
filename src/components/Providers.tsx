'use client';
import { Provider } from 'jotai';
import React from 'react';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <Provider>{children}</Provider>;
};

export default Providers;
