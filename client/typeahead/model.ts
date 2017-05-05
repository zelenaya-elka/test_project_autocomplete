export interface IItem {
  id?: number;
  text: string;
};

/**
 * структура State:
 * State:{
 *  hintList = IItem[]; - массив значений, которые отображаются во всплывающей подсказке
 *  isTyping - признак того, что в инпут вводят значение
 *  isLoading - флаг, отражающий процесс загрузки данных с сервера
 *  selectItem - выбранная в интупе запись
 * }
 */
export interface IState  {
  hintList: IItem[];
  isTyping: boolean;
  isLoading: boolean;
  selectedItem: IItem;
  errorText: string;
  error: boolean;
};

