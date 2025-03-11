import Project from "./components/Project";
import ProjectSideBar from "./components/ProjectSideBar";

function App() {
  return (
    <div className="flex">
      <ProjectSideBar />
      <Project />
    </div>
  );
}

export default App;
