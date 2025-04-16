import { useState } from "react";
import Tasks from "./Tasks";

export default function SelectedProject({
  project,
  handleAddTask,
  handleDelete,
  handleClearTask, // Função para remover task do projeto (deve ser implementada no App)
}) {
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

      <Tasks
        tasks={project.tasks}
        onAddTask={handleAddTask}
        onClearTask={handleClearTask}
      />
    </div>
  );
}
