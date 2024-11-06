import { createStore } from "redux";

const ADD_TASK = "task/add ";
const DELETE_TASK = "task/delete";

const initialstate = {
  task: [],
};

const taskReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: [...state.task, action.payload],
      };
    case DELETE_TASK:
      // eslint-disable-next-line no-case-declarations
      const updatedTask = state.task.filter((curTask, index) => {
        return index !== action.payload;
      });
      return {
        ...state,
        task: updatedTask,
      };

    default:
      return state;
  }
};

export const store = createStore(taskReducer);
console.log(store);

console.log("initial state ", store.getState());

export const addTask = (data) => {
  return { type: ADD_TASK, payload: { data } };
};

export const deleteTask = (id) => {
  return { type: DELETE_TASK, payload: id };
};

store.dispatch(addTask("hey addtask function added"));
store.dispatch(deleteTask(1));

// console.log("updated state:", store.getState());
// store.dispatch({ type: ADD_TASK, payload: "hii there, this is 2nd payload" });
// console.log("updated state:", store.getState());
// store.dispatch({ type: DELETE_TASK, payload: 1 });
// console.log("deleted state:", store.getState());
