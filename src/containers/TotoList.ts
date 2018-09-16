import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Action } from "redux-actions";
import Counter, { ITotoListProps, IDispatchProps } from "../components/TodoList";
import { done } from "../actions";
import { ITodoListState, EVisibility } from "../reducers";


function filter(state: ITodoListState) {
  switch(state.visibility) {
    case EVisibility.Active:
      return state.todoList.filter(t => !t.done);
    case EVisibility.Completed:
      return state.todoList.filter(t => t.done);
    default:
      return state.todoList;
  }
}
export function mapStateToProps(state: ITodoListState): ITotoListProps {
  return {
    todoList: filter(state)
  };
}

export function mapDispatchToProps(dispatch: Dispatch<Action<number>>): IDispatchProps {
  return {
    onClick: (id: number) => dispatch(done(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
