import * as React from "react";
import { EVisibility } from "../reducers";

interface IFilterLinkProps extends IFilterProps {
  visibility: EVisibility;
}

export interface IDispatchProps {
  changeVisibility: (v: EVisibility) => void;
}

const FilterLink = (props: IFilterLinkProps & IDispatchProps) => {
  if (props.visibility === props.currentVisibility) {
    return (<span>{props.children}</span>);
  } else {
    const onclick = (e: any) => {
      e.preventDefault();
      props.changeVisibility(props.visibility);
    };
    return (
      <a href="#" onClick={onclick}>
        {props.children}
      </a>);
  }
};

export interface IFilterProps extends React.Props<{}> {
  currentVisibility: EVisibility;
}

const Filter = (props: IFilterProps & IDispatchProps) => {

  const p1 = { ...props, visibility: EVisibility.All };
  const p2 = { ...props, visibility: EVisibility.Completed };
  const p3 = { ...props, visibility: EVisibility.Active };
  return (
    <div>
      Show:
      {" "}
      <FilterLink {...p1}>All</FilterLink>
      {" "}
      <FilterLink {...p2}>Completed</FilterLink>
      {" "}
      <FilterLink {...p3}>Active</FilterLink>
    </div>);
};
export default Filter;
