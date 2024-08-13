import React from 'react';
import AppState, { elementType } from '../../state/state.ts';

type ComparableElementProps = {
  itemData: elementType;
  concurentId?: number;
};

export const ComparableElement = React.memo((props: ComparableElementProps) => {
  return (
    <div>
      <img
        src={props.itemData.photo}
        alt="нет изображения :("
        className="w-[300px] h-[300px] rounded-main element-hover cursor-pointer drop-shadow-2xl hover:drop-shadow-xl "
        onClick={
          props.concurentId
            ? () => AppState.deleteElement(props.concurentId!)
            : () => console.log('Победил: ', props.itemData.name)
        }
      />
      <div className="text-center text-2xl mt-[16px]">
        {props.itemData.name}
      </div>
      <div className="text-center text-base opacity-70">
        {props.itemData.singer}
      </div>
    </div>
  );
});
