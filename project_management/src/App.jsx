import { useEffect, useState } from "react";
import Project from "./components/Project";
import ProjectSideBar from "./components/ProjectSideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projects, setProjects] = useState([]);
  const [createProject, setCreateProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Ao adicionar um projeto, inicializa o array de tasks
  function handleAddProject(project) {
    const newProject = { ...project, tasks: [] };
    setProjects([...projects, newProject]);
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

  // Ao adicionar uma task, atualizamos o projeto correspondente
  const handleAddTask = (task) => {
    if (!selectedProject) return;

    const updatedProjects = projects.map((p) => {
      if (p === selectedProject) {
        // Adiciona a task ao array tasks do projeto
        return { ...p, tasks: [...p.tasks, task] };
      }
      return p;
    });

    setProjects(updatedProjects);
    // Atualiza o selectedProject para refletir a mudança
    const updatedProject = updatedProjects.find(
      (p) => p.title === selectedProject.title
    );

    setSelectedProject(updatedProject);
  };

  const handleDelete = (project) => {
    setProjects(projects.filter((p) => p !== project));
    setSelectedProject(null);
    setCreateProject(false);
  };

  const handleClearTask = (index) => {
    if (!selectedProject) return;

    // Cria uma nova lista de tasks removendo a task no índice especificado
    const updatedTasks = selectedProject.tasks.filter((_, i) => i !== index);

    // Cria um novo objeto de projeto com as tasks atualizadas
    const updatedProject = { ...selectedProject, tasks: updatedTasks };

    // Atualiza o array de projetos substituindo o projeto selecionado pelo atualizado
    const updatedProjects = projects.map((project) =>
      project === selectedProject ? updatedProject : project
    );

    // Atualiza o estado com o novo array de projetos e o projeto selecionado
    setProjects(updatedProjects);
    setSelectedProject(updatedProject);
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
        <SelectedProject
          project={selectedProject}
          handleDelete={handleDelete}
          handleAddTask={handleAddTask}
          handleClearTask={handleClearTask}
        />
      )}
    </div>
  );
}

export default App;
