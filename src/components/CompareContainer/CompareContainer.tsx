import React from 'react';
import { ComparableElement } from '../ComparableElement/ComparableElement';
import { InputModal } from '../InputModal/InputModal';
import { InfoPanel } from '../InfoPanel/InfoPanel';

export const CompareContainer = React.memo(() => {
  return (
    <section className="w-screen h-screen flex items-center justify-center text-text">
      <div className="w-[1000px] h-[600px] flex items-center justify-around rounded-main shadow-xl border-solid border-2 border-border">
        {/* <ComparableElement />
        <ComparableElement /> */}
        {/* <InputModal /> */}
        <InfoPanel />
      </div>
    </section>
  );
});
