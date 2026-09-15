import { useEffect, useState } from "react";

import Button from "../components/Button";
import ProjectModal from "../components/ProjectModal";
import ProjectItem from "../components/ProjectItem";

import type { Task } from "./Tasks";

export type Project = {
  projectId: string;
  projectName: string;
  projectDescription: string;
  projectColour: string;
  tasks: Task[];
};

export default function Projects() {
  const [addProjectModalisOpen, setAddProjectModalisOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectColour, setProjectColour] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const resetStateData = () => {
    setProjectName("");
    setProjectDescription("");
    setProjectColour("");
  };

  const handleAddNewProject = () => {
    setProjects([
      ...projects,
      {
        projectId: crypto.randomUUID(),
        projectName,
        projectDescription,
        projectColour,
        tasks: [],
      },
    ]);

    resetStateData();
    setAddProjectModalisOpen(false);
  };

  const handleUpdateProjectData = (updatedProjectData: Project) => {
    const projectToUpdate: Project | undefined = projects.find(
      (project: Project) => project.projectId === updatedProjectData.projectId,
    );

    if (!projectToUpdate) return;

    setProjects(
      projects.map((project) => {
        if (project.projectId === projectToUpdate.projectId) {
          project = {
            projectId: updatedProjectData.projectId,
            projectName: updatedProjectData.projectName,
            projectDescription: updatedProjectData.projectDescription,
            projectColour: updatedProjectData.projectColour,
            tasks: project.tasks,
          };
        }
        return project;
      }),
    );

    resetStateData();
    setAddProjectModalisOpen(false);
  };

  const handleDeleteProject = (projectId: string) => {
    setProjects(projects.filter((project) => project.projectId !== projectId));
  };

  return (
    <>
      <div className="projects view-with-btn">
        <h2>Projects</h2>
        <Button text="New Project" setAddProjectModalisOpen={setAddProjectModalisOpen} />
        {projects.length > 0 && (
          <div className="projects-list">
            {projects.map((project) => {
              return (
                <ProjectItem
                  key={project.projectId}
                  project={project}
                  projectName={projectName}
                  projectDescription={projectDescription}
                  projectColour={projectColour}
                  resetStateData={resetStateData}
                  handleSubmitData={handleUpdateProjectData}
                  handleDeleteProject={handleDeleteProject}
                  setProjectName={setProjectName}
                  setProjectDescription={setProjectDescription}
                  setProjectColour={setProjectColour}
                />
              );
            })}
          </div>
        )}
        {addProjectModalisOpen && (
          <ProjectModal
            heading="Add New Project"
            submitButtonCopy="Create Project"
            projectName={projectName}
            projectDescription={projectDescription}
            projectColour={projectColour}
            submitDisabled={projectName.length < 3}
            resetStateData={resetStateData}
            handleSubmitData={handleAddNewProject}
            setProjectName={setProjectName}
            setProjectDescription={setProjectDescription}
            setProjectColour={setProjectColour}
            setAddProjectModalisOpen={setAddProjectModalisOpen}
          />
        )}
      </div>
    </>
  );
}
