import * as React from "react";
import { ITodo } from "../reducers";
import "./TodoList.css"

export interface ITotoListProps {
  todoList: ITodo[];
}

export interface ITotoProps {
  id: number
  content: string;
}

export interface IDispatchProps {
  onClick: (id: number) => void;
}

function getClassName(done: boolean) {
  return done ? "todo-list-done" : "";
}

const Todo = (todo: ITodo & IDispatchProps) => (
<li onClick={() => todo.onClick(todo.id)} className={getClassName(todo.done)}>
  {todo.content}
</li>
);

const TodoList = (props: ITotoListProps & IDispatchProps) => {

  return (
    <div>
      <ul>
        {
          props.todoList.map(todo => {
            const p = {...todo, onClick: props.onClick };
            return <Todo key={todo.id} {...p}/>;
          })
        }
      </ul>
    </div>);
};
export default TodoList;
