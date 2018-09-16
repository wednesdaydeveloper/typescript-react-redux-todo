import { Action, handleActions } from "redux-actions";
import { ADD_TODO, CHANGE_VISIBILITY, DONE } from "../actions";

export interface ITodo {
  id: number;
  content: string;
  done: boolean;
}

export enum EVisibility {
  All,
  Completed,
  Active
}
/**
 * State のインターフェイス
 */
export interface ITodoListState {
  current: number;
  visibility: EVisibility;
  todoList: ITodo[];
}

/**
 * state の初期値
 */
const initState: ITodoListState = { current: 0, visibility: EVisibility.All, todoList: [ { id:0, content: "hello", done: false }, ] };

const map = {
  [ADD_TODO]: (state: ITodoListState, action: Action<string>) => {
    const current = state.current + 1;
    const content = action.payload!;
    const todoList: ITodo[] = [
      ...state.todoList,
      { id: current, content, done: false }
    ];
    return { ...state, current, todoList };
  },
  [DONE]: (state: ITodoListState, action: Action<number>) => {
    const id = action.payload!;
    const todoList: ITodo[] = state.todoList.map(t => (t.id === id) ? {...t, done: !t.done} : t);
    return { ...state, todoList };
  },
  [CHANGE_VISIBILITY]: (state: ITodoListState, action: Action<EVisibility>) => {
    const visibility = action.payload!;
    return { ...state, visibility };
  }
};
/**
 * reducer
 */
export default handleActions<ITodoListState, any>(map, initState);
