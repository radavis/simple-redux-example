const INCREMENT = "simple-redux-example/counter/INCREMENT";

const initialState = { count: 0 };

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    default:
      return state;
  }
};

const increment = () => ({
  type: INCREMENT,
});

export default reducer;

export { increment };
