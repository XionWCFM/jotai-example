import AtomComponent from '@/components/AtomComponent';
import React from 'react';
import AsyncAtomComponent from '../components/AsyncAtomComponent';

interface pageProps {}

const page = ({}: pageProps) => {
  return (
    <div>
      <React.Suspense fallback={<div>엄</div>}>
        <AsyncAtomComponent />
      </React.Suspense>
      <AtomComponent />
    </div>
  );
};

export default page;
