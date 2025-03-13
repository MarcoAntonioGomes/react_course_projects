import { useState } from "react";

export default function CreateProject({
  onAddProject,
  onCreateProject,
  onError,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");
  const handleCancel = () => {};

  const handleSave = (e) => {
    if (!title) {
      setMensagemErro("Title is required");
      onError();
      return;
    }

    if (!description) {
      setMensagemErro("Description is required");
      onError();
      return;
    }

    if (!dueDate) {
      setMensagemErro("Due date is required");
      onError();
      return;
    }

    //onAddProject({ title, description, dueDate });
    //onCreateProject();
  };

  return (
    <form className=" mt-48 w-full p-6  space-y-4">
      {/* Header with buttons */}

      <div className="w-full">
        {mensagemErro && (
          <div
            className="bg-red-100 border mb-5 border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Error!&nbsp;</strong>
            <span className="block sm:inline">{mensagemErro}</span>
          </div>
        )}
        <div className=" ml-5 w-9/12 flex justify-end ">
          <button
            type="button"
            onClick={handleCancel}
            className="px-3 py-1 text-black-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-9/12  bg-neutral-700 bg-opacity-20 ml-5 border-b-2 border-b-gray-400 px-3 py-2 focus:outline-none focus:ring focus:ring-zinc-500"
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-9/12  ml-5  bg-neutral-700 bg-opacity-20 border-b-2 border-b-gray-400 py-2 focus:outline-none focus:ring focus:ring-zinc-500"
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
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            placeholder="dd.mm.yyyy"
            className="w-9/12  bg-neutral-700 bg-opacity-20 ml-5 border-b-2 border-b-gray-400 px-3 py-2 focus:outline-none focus:ring focus:ring-zinc-500"
          />
        </div>
      </div>
    </form>
  );
}
