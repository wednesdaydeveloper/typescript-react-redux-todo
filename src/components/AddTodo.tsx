import * as React from "react";

export interface IDispatchProps {
  onAddTodo: (c: string) => void;
}

export interface IAddTodoProps { }

const AddTodo = (props: IAddTodoProps & IDispatchProps) => {
  let input: HTMLInputElement;

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!input.value.trim()) {
      return;
    }
    props.onAddTodo(input.value);
    input.value = '';
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input ref={node => input = node!} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};
export default AddTodo;