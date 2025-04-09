import Button from "./Button";

export default function NoProjectSelected({ onStartCreateProject }) {
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
        click={onStartCreateProject}
      />
    </div>
  );
}
