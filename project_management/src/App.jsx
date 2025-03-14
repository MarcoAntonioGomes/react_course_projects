import { useEffect, useState } from "react";
import Project from "./components/Project";
import ProjectSideBar from "./components/ProjectSideBar";
import Task from "./components/Task";

function App() {
  const [projects, setProjects] = useState([]);
  const [createProject, setCreateProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [tasks, setTasks] = useState([]);

  function handleAddProject(project) {
    setProjects([...projects, project]);
  }

  const handleCreateProject = () => {
    console.log(selectedProject);
    setSelectedProject(null);
    setCreateProject(true);
    console.log("create project");
  };

  useEffect(() => {
    console.log("selectedProject atualizado:", selectedProject);
  }, [selectedProject]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleDelete = (project) => {
    setProjects(projects.filter((p) => p !== project));
    setSelectedProject(null);
    setCreateProject(false);
  };

  return (
    <div className="flex">
      <ProjectSideBar
        onCreateProject={handleCreateProject}
        onProjectClick={handleProjectClick}
        projects={projects}
      />

      {!selectedProject && (
        <Project
          onCancel={() => setCreateProject(false)}
          startCreateProject={createProject}
          addProject={handleAddProject}
        />
      )}

      {selectedProject && (
        <Task
          project={selectedProject}
          tasks={tasks}
          handleDelete={handleDelete}
          setTasks={setTasks}
          handleAddTask={handleAddTask}
        />
      )}
    </div>
  );
}

export default App;
