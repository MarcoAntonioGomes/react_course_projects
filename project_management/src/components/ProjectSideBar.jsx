import Button from "./Button";

export default function ProjectSideBar() {
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
      <h2 className="capitalize text-slate-300 text-center pt-20 font-bold text-2xl">
        YOUR PROJECTS
      </h2>
      <Button
        label="Add Project"
        css=" px-4 py-2  space-x-2 flex items-center mt-20 w-40 h-12 rounded text-lg text-neutral-500 bg-neutral-700"
        icon={createBtnIcon()}
      />
    </div>
  );
}
