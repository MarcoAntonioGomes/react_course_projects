import Button from "./Button";

export default function ProjectSideBar({ projects, onCreateProject }) {
  function createBtnIcon() {
    return (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 5v14M5 12h14"></path>
      </svg>
    );
  }

  return (
    <div className="w-5/12 mt-10 h-screen rounded-tr-3xl bg-black">
      <h2 className="capitalize text-slate-300 ml-10 pt-20 font-bold text-2xl">
        YOUR PROJECTS
      </h2>
      <Button
        label="Add Project"
        btnAlign="flex flex-col  ml-10 "
        css=" px-4 py-2 mb-10  space-x-2 flex items-center mt-20 w-40 h-12 rounded text-lg text-neutral-500 bg-neutral-700"
        icon={createBtnIcon()}
        click={onCreateProject}
      />

      <div>
        {projects.map((project) => (
          <div key={project.id} className="flex  justify-between px-5 py-3 ">
            <button className="text-neutral-50 w-72  font-light text-lg  text-left pl-5  rounded h-9 ml-5 bg-zinc-900 hover:text-neutral-100">
              {project.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
