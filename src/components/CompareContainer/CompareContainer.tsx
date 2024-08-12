import React from 'react';
import { ComparableElement } from '../ComparableElement/ComparableElement';

export const CompareContainer = React.memo(() => {
    const [elements, setElements] = React.useState([]);
    
  return (
    <section className="w-screen h-screen  flex items-center justify-center">
      <div className="w-[1000px] h-[600px] flex items-center justify-around rounded-main shadow-xl">
        <ComparableElement />
        <ComparableElement />
      </div>
    </section>
  );
});
