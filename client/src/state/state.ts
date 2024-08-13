import { makeAutoObservable } from 'mobx';

type viewType = 'info' | 'sendId' | 'play';
export type elementType = { id: number; name: string; photo: any; singer?: string };

class AppState {
  private _currentView: viewType = 'info';
  private _elements: elementType[] = [
    { id: 1, name: 'Element 1', photo: '1.png', singer: 'Singer 1' },
    { id: 2, name: 'Element 2', photo: '2.png', singer: 'Singer 2' },
    { id: 3, name: 'Element 3', photo: '3.png', singer: 'Singer 3' },
  ];

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

  addElement(element: elementType) {
    this._elements.push(element);
  }

  deleteElement(id: number) {
    this._elements = this._elements.filter((element) => element.id !== id);
  }
}
export default new AppState();
