import { createStore } from 'redux';

//Action generators
const changeCount = ({ value = 1 }) => ({
  type: 'CHANGE_VALUE',
  value: value
});

const setCount = ({ value }) => ({
  type: 'SET',
  value: value
});

const resetCount = () => ({
  type: 'RESET'
});

//Reducers
//1. Reducers are pure functions (pure meaning have no exteranl dependancies except state and do not change anything outside of it's own scope)
//2. NEVER CHANGE STATE OR ACTION. Read and return something new

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'CHANGE_VALUE':
      return {
        count: state.count + action.value
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.value
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//Actions - object that gets sent to the store
//increment the count
// store.dispatch({
//   type: 'INCREMENT',
//   value: 5
// });
store.dispatch(changeCount({ value: 5 }));
store.dispatch(changeCount({ value: -5 }));
store.dispatch(setCount({ value: 101 }));
store.dispatch(resetCount());
