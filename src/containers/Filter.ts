import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Action } from "redux-actions";
import Filter, { IDispatchProps, IFilterProps } from "../components/Filter";
import { changeVisibility } from "../actions";
import { EVisibility, ITodoListState } from "../reducers";

export function mapStateToProps(state: ITodoListState): IFilterProps {
  return {
    currentVisibility: state.visibility
  };
}

export function mapDispatchToProps(dispatch: Dispatch<Action<EVisibility>>): IDispatchProps {
  return {
    changeVisibility: (v: EVisibility) => dispatch(changeVisibility(v))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
