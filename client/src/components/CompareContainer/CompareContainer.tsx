import { InputModal } from '../InputModal/InputModal';
import { InfoPanel } from '../InfoPanel/InfoPanel';
import AppState from '../../state/state.ts';
import { observer } from 'mobx-react-lite';
import { ComparableModal } from '../ComparableModal/ComparableModal.tsx';

export const CompareContainer = observer(() => {
  return (
    <section className="w-screen h-screen flex items-center justify-center text-text">
      <div className="w-[1000px] h-[600px] flex items-center justify-around rounded-main shadow-xl border-solid border-2 border-border">
        {(() => {
          switch (AppState.currentView) {
            case 'info':
              return <InfoPanel />;
            case 'sendId':
              return <InputModal />;
            case 'play':
              return <ComparableModal />;
            default:
              return <InfoPanel />;
          }
        })()}
      </div>
    </section>
  );
});
