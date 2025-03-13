import Button from "./Button";
import React, { useState } from "react";

export default function Project({ addProject, startCreateProject, onCancel }) {
  "";
  const [formData, setFormData] = useState({
    createProject: false,
    title: "",
    description: "",
    dueDate: "",
    mensagemErro: "",
  });

  const handleCancel = () => {
    onCancel();
    setFormData((prev) => ({ ...prev, createProject: false }));
  };

  const handleCreateProject = () => {
    setFormData((prev) => ({
      ...prev,
      mensagemErro: "",
      title: "",
      description: "",
      dueDate: "",
      createProject: true,
    }));
  };

  if (startCreateProject && !formData.createProject) {
    handleCreateProject();
  }

  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.title) {
      return setFormData((prev) => ({
        ...prev,
        mensagemErro: "Title is required",
      }));
    }
    if (!formData.description) {
      return setFormData((prev) => ({
        ...prev,
        mensagemErro: "Description is required",
      }));
    }
    if (!formData.dueDate) {
      return setFormData((prev) => ({
        ...prev,
        mensagemErro: "Due date is required",
      }));
    }

    addProject({
      title: formData.title,
      description: formData.description,
      dueDate: formData.dueDate,
    });

    onCancel();
    setFormData((prev) => ({ ...prev, createProject: false }));
  };

  if (formData.createProject) {
    return (
      <form className="mt-48 w-full p-6 space-y-4" onSubmit={handleSave}>
        <div className="w-full">
          {formData.mensagemErro && (
            <div
              className="bg-red-100 border mb-5 ml-5  w-9/12 border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Error!&nbsp;</strong>
              <span className="block sm:inline">{formData.mensagemErro}</span>
            </div>
          )}
          <div className="ml-5 w-9/12 flex justify-end">
            <button
              type="button"
              onClick={handleCancel}
              className="px-3 py-1 text-black-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-black w-20 text-white rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>

          {/* Title Field */}
          <div>
            <label
              htmlFor="title"
              className="block mb-1 ml-5 font-medium text-gray-700"
            >
              TITLE
            </label>
            <input
              id="title"
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, title: e.target.value }))
              }
              className="w-9/12 bg-neutral-700 bg-opacity-20 ml-5 border-b-2 border-b-gray-400 px-3 py-2 focus:outline-none focus:ring focus:ring-zinc-500"
            />
          </div>

          {/* Description Field */}
          <div className="mt-5">
            <label
              htmlFor="description"
              className="block mb-1 ml-5 font-medium text-gray-700"
            >
              DESCRIPTION
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              rows={3}
              className="w-9/12 ml-5 bg-neutral-700 bg-opacity-20 border-b-2 border-b-gray-400 py-2 focus:outline-none focus:ring focus:ring-zinc-500"
            />
          </div>

          {/* Due Date Field */}
          <div className="mt-5">
            <label
              htmlFor="dueDate"
              className="block mb-1 ml-5 font-medium text-gray-700"
            >
              DUE DATE
            </label>
            <input
              id="dueDate"
              type="text"
              value={formData.dueDate}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, dueDate: e.target.value }))
              }
              placeholder="dd.mm.yyyy"
              className="w-9/12 bg-neutral-700 bg-opacity-20 ml-5 border-b-2 border-b-gray-400 px-3 py-2 focus:outline-none focus:ring focus:ring-zinc-500"
            />
          </div>
        </div>
      </form>
    );
  } else {
    return (
      <div className="flex w-screen flex-col items-center justify-center h-screen">
        <img
          className="w-20"
          src="src/assets/no-projects.png"
          alt="No projects"
        />
        <h2 className="font-bold text-3xl mt-10 text-neutral-600">
          No Project Selected
        </h2>
        <h3 className="mt-5 font-semibold text-lg text-neutral-400">
          Select a project or get started with a new one
        </h3>
        <Button
          label="Create new Project"
          btnAlign="flex flex-col "
          css="px-4 py-2 space-x-2 flex items-center mt-10 w-50 h-12 rounded text-lg text-neutral-400 bg-neutral-700"
          click={handleCreateProject}
        />
      </div>
    );
  }
}
