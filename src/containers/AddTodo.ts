import { connect } from "react-redux";
import { Action } from "redux-actions";
import { Dispatch } from "redux";
import AddTodo, { IDispatchProps, IAddTodoProps } from "../components/AddTodo";
import { addTodo } from "../actions";
import { ITodoListState } from "../reducers";

export function mapStateToProps(state: ITodoListState): IAddTodoProps {
  return {};
}

export function mapDispatchToProps(dispatch: Dispatch<Action<string>>): IDispatchProps {
  return {
    onAddTodo: (content: string) => dispatch(addTodo(content))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
