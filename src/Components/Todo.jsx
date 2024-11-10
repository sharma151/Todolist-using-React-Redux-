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
    <div className="container mx-auto bg-gray-100 min-h-screen p-6 flex justify-center items-center">
      <div className="todo-app bg-white rounded-lg shadow-md w-full max-w-lg p-8">
        <h1 className="text-3xl font-semibold text-primary mb-6 text-center">
          <i className="font-serif">Todo List:</i>
        </h1>
        <div className="row ">
          <form
            onSubmit={handleFormSubmit}
            className="flex mb-6 gap-3 items-center"
          >
            <input
              type="text"
              id="input-box"
              placeholder="Add a new task"
              value={Task}
              onChange={(e) => setTask(e.target.value)}
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-gray-700"
            />
            <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-200">
              Add task
            </button>
          </form>
        </div>
        <ul id="list-container" className="space-y-4">
          {task.map((curTask, index) => {
            return (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-md shadow-sm hover:shadow-md transition duration-200"
              >
                <p className="text-gray-800">
                  {index}:{curTask.data}
                </p>
                <div>
                  <MdDeleteForever
                    className=" icon-style  cursor-pointer hover:text-red-600 transition duration-200"
                    onClick={() => handleTaskDelete(index)}
                    size={24}
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
