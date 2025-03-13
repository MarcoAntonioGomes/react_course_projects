import { useState } from "react";
import Project from "./components/Project";
import ProjectSideBar from "./components/ProjectSideBar";

function App() {
  const [projects, setProjects] = useState([]);
  const [createProject, setCreateProject] = useState(false);

  function handleAddProject(project) {
    setProjects([...projects, project]);
  }

  const handleCreateProject = () => {
    console.log(createProject);
    setCreateProject(true);
    console.log(createProject);
  };

  return (
    <div className="flex">
      <ProjectSideBar
        onCreateProject={handleCreateProject}
        projects={projects}
      />
      <Project
        onCancel={() => setCreateProject(false)}
        startCreateProject={createProject}
        addProject={handleAddProject}
      />
    </div>
  );
}

export default App;
