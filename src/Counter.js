import React from "react";
import { connect } from "react-redux";
import { increment } from "./redux/modules/counter";

const Counter = ({ value, onIncrementClick }) => (
  <div>
    <span>{value}</span>
    <button onClick={onIncrementClick}>Increment</button>
  </div>
);

const mapStateToProps = (state) => ({
  value: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrementClick: () => dispatch(increment()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
