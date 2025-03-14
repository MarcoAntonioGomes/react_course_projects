import { useState } from "react";

export default function Task({
  project,
  tasks,
  setTasks,
  handleAddTask,
  handleDelete,
}) {
  const [newTask, setNewTask] = useState("");

  const onAddTask = () => {
    if (newTask.trim() !== "") {
      handleAddTask(newTask);
      setNewTask("");
    }
  };

  const onClearTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const onDeleteClick = () => {
    handleDelete(project);
  };

  return (
    <div className="mt-20 w-full ml-10">
      <div className="flex w-10/12 justify-between">
        <h2 className="text-4xl font-bold">{project.title}</h2>
        <button onClick={onDeleteClick} className="text-right">
          Delete
        </button>
      </div>

      <p className="mt-5">{project.dueDate}</p>
      <p className="mt-5">{project.description}</p>
      <hr className="my-4 w-10/12 border-t-4 border-gray-300" />
      <h2 className="text-3xl font-bold">Tasks</h2>
      <div className="flex items-center mt-5">
        <div className="w-6/12">
          <input
            id="task"
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="w-full bg-neutral-700 bg-opacity-20 border-b-2 border-b-gray-400 px-3 py-2 focus:outline-none focus:ring focus:ring-zinc-500"
          />
        </div>
        <div>
          <button onClick={onAddTask} className="ml-5">
            Add Task
          </button>
        </div>
      </div>
      <div className="w-10/12 mt-5 bg-gray-200">
        {tasks.map((task, index) => (
          <div key={index} className="flex justify-between px-5 py-3">
            <p>{task}</p>
            <button
              onClick={() => onClearTask(index)}
              className="w-72 font-light text-lg  text-right pr-5 text-black h-9 ml-5  hover:text-neutral-400"
            >
              Clear
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
