import { createAction } from "redux-actions";
import { EVisibility } from "../reducers"
//
// action
//
export const ADD_TODO: string = "todolist/add_todo";
export const CHANGE_VISIBILITY: string = "todolist/change_visibility";
export const DONE: string = "todolist/done";

//
//  action creator
//
export const addTodo = createAction<string, string>(
  ADD_TODO,
  (content: string) => content
);

export const done = createAction<number, number>(DONE, (id: number) => id);

export const changeVisibility = createAction<EVisibility, EVisibility>(
  CHANGE_VISIBILITY,
  (content: EVisibility) => content
);
