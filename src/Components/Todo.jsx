import { MdDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask } from "../store";
import { useState } from "react";

const Todo = () => {
  const [Task, setTask] = useState("");
  const task = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(Task));
    return setTask("");
  };

  const handleTaskDelete = (id) => {
    return dispatch(deleteTask(id));
  };

  return (
    <div className="container">
      <div className="todo-app">
        <h1>
          <i>to-do list:</i>
        </h1>
        <div className="row">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              id="input-box"
              placeholder="Add a new task"
              value={Task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button>Add task</button>
          </form>
        </div>
        <ul id="list-container">
          {task.map((curTask, index) => {
            return (
              <li key={index}>
                <p>
                  {index}:{curTask.data}
                </p>
                <div>
                  <MdDeleteForever
                    className="icon-style"
                    onClick={() => handleTaskDelete(index)}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
