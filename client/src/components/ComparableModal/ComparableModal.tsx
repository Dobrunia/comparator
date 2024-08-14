import AppState from '../../state/state.ts';
import { observer } from 'mobx-react-lite';
import { ComparableElement } from '../ComparableElement/ComparableElement.tsx';
import { Button, Typography } from '@mui/material';

export const ComparableModal = observer(() => {
  if (AppState.elements.length < 2) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <Typography variant="h4">
          Победа: {AppState.elements[0].name}
        </Typography>
        <br />
        <ComparableElement itemData={AppState.elements[0]} />
        <br />
        <Button
          onClick={() => (AppState.currentView = 'sendId')}
          variant="contained"
        >
          Начать с начала
        </Button>
      </div>
    );
  } else {
    const twoItems = [AppState.elements[0], AppState.elements[1]];
    return (
      <div className="flex items-center justify-center flex-col w-full h-full p-[16px]">
        <Typography variant="h4">Какой вариант лучше:</Typography>
        <div className="flex flex-row items-center justify-around w-full h-full">
          <ComparableElement
            itemData={twoItems[0]}
            concurentId={twoItems[1].id}
          />
          или
          <ComparableElement
            itemData={twoItems[1]}
            concurentId={twoItems[0].id}
          />
        </div>
      </div>
    );
  }
});
