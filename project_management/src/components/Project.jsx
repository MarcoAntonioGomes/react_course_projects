import Button from "./Button";
import React, { useState, useRef } from "react";
import NoProjectSelected from "./NoProjectSelected";
import Modal from "./Modal";

export default function Project({ addProject, startCreateProject, onCancel }) {
  const [formData, setFormData] = useState({
    createProject: false,
    title: "",
    description: "",
    dueDate: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const modalRef = useRef();

  const handleCancel = () => {
    onCancel();
    setFormData((prev) => ({ ...prev, createProject: false }));
  };

  const handleCreateProject = () => {
    setFormData((prev) => ({
      ...prev,
      title: "",
      description: "",
      dueDate: "",
      createProject: true,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (!formData.title) {
      setErrorMessage("Please provide a title for the project.");
      modalRef.current.open();
      return;
    }

    if (!formData.description) {
      setErrorMessage("Please provide a description for the project.");
      modalRef.current.open();
      return;
    }

    if (!formData.dueDate) {
      setErrorMessage("Please provide a due date for the project.");
      modalRef.current.open();
      return;
    }

    addProject({
      title: formData.title,
      description: formData.description,
      dueDate: formData.dueDate,
    });

    onCancel();
    setFormData((prev) => ({ ...prev, createProject: false }));
  };

  if (startCreateProject && !formData.createProject) {
    handleCreateProject();
  }

  if (formData.createProject) {
    return (
      <>
        <Modal buttonCaption="Close" ref={modalRef}>
          <h2 className="text-xl font-bold text-stone-700 my-4">
            Invalid Input
          </h2>
          <p className="text-stone-500 mb-4">{errorMessage}</p>
        </Modal>
        <form className="mt-48 w-full p-6 space-y-4" onSubmit={handleSave}>
          <div className="w-full">
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
              <label className="block mb-1 ml-5 font-medium text-gray-700">
                TITLE
              </label>
              <input
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
              <label className="block mb-1 ml-5 font-medium text-gray-700">
                DESCRIPTION
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                rows={3}
                className="w-9/12 bg-neutral-700 bg-opacity-20 ml-5 border-b-2 border-b-gray-400 px-3 py-2 focus:outline-none focus:ring focus:ring-zinc-500"
              />
            </div>

            {/* Due Date Field */}
            <div className="mt-5">
              <label className="block mb-1 ml-5 font-medium text-gray-700">
                DUE DATE
              </label>
              <input
                type="date"
                value={formData.dueDate}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, dueDate: e.target.value }))
                }
                className="w-9/12 bg-neutral-700 bg-opacity-20 ml-5 border-b-2 border-b-gray-400 px-3 py-2 focus:outline-none focus:ring focus:ring-zinc-500 text-neutral-100"
              />
            </div>
          </div>
        </form>
      </>
    );
  } else {
    return <NoProjectSelected onStartCreateProject={handleCreateProject} />;
  }
}
