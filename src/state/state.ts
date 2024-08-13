import { makeAutoObservable } from 'mobx';

type viewType = 'info' | 'sendId' | 'play';
type itemType = { id: number; name: string; photo: any; singer?: string };

class AppState {
  private _currentView: viewType = 'info';
  private _items: itemType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get currentView(): viewType {
    return this._currentView;
  }

  set currentView(view: viewType) {
    this._currentView = view;
  }
}
export default new AppState();
