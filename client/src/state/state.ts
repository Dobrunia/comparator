import { makeAutoObservable } from 'mobx';

type viewType = 'info' | 'sendId' | 'play';
export type elementType = {
  id: number;
  name: string;
  photo: string;
  singer?: string;
};

class AppState {
  private _currentView: viewType = 'info';
  private _elements: elementType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get currentView(): viewType {
    return this._currentView;
  }

  get elements(): elementType[] {
    return this._elements;
  }

  set currentView(view: viewType) {
    this._currentView = view;
  }

  set elements(elements: elementType[]) {
    this._elements = elements;
  }

  deleteElement(id: number) {
    this._elements = this._elements.filter((element) => element.id !== id);
  }
}
export default new AppState();
