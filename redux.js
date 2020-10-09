export const createStore = () => {
  let currentState = {};
  let observers = [];
  function getState() {
    return currentState;
  } // getter
  function dispatch(action) {
    currentState = reducer(currentState, action);
    observers.forEach((fn) => fn());
  } // setter
  function subscribe(fn) {
    observers.push(fn);
  } // 发布订阅
  return {
    getState,
    dispatch,
    subscribe,
  };
};

const store = createStore(reducer);
store.dispatch({ type: "plus" });
console.log(store.getState);
