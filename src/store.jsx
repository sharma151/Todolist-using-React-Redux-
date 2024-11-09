import { createStore } from "redux";

const ADD_TASK = "task/add ";
const DELETE_TASK = "task/delete";

const initialstate = {
  task: [],
};

export const store = createStore(taskReducer);

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

export const addTask = (data) => {
  return { type: ADD_TASK, payload: { data } };
};

export const deleteTask = (id) => {
  return { type: DELETE_TASK, payload: id };
};
