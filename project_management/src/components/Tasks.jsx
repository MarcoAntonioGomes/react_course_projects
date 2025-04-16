import { useState } from "react";

export default function Tasks({ tasks, onAddTask, onClearTask }) {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      onAddTask(newTask);
      setNewTask("");
    }
  };

  return (
    <div>
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
          <button onClick={handleAddTask} className="ml-5">
            Add Task
          </button>
        </div>
      </div>
      <div className="w-10/12 mt-5 bg-gray-200">
        {tasks &&
          tasks.map((task, index) => (
            <div key={index} className="flex justify-between px-5 py-3">
              <p>{task}</p>
              <button
                onClick={() => onClearTask(index)}
                className="w-72 font-light text-lg text-right pr-5 text-black h-9 ml-5 hover:text-neutral-400"
              >
                Clear
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
