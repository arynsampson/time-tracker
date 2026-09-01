import { useEffect, useState } from "react";

import Button from "../components/Button";
import Modal from "../components/Modal";
import ProjectItem from "../components/ProjectItem";

type Project = {
  id: string;
  projectName: string;
  projectDescription: string;
};

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const handleAddProject = () => {
    setProjects([
      ...projects,
      {
        id: crypto.randomUUID(),
        projectName,
        projectDescription,
      },
    ]);

    setProjectName("");
    setProjectDescription("");
    setIsOpen(false);
  };

  return (
    <>
      <div className="projects view">
        <h2>Projects</h2>
        <Button text="New Project" setIsOpen={setIsOpen} />
        <div className="projects-list">
          {projects.map((project) => {
            return (
              <ProjectItem
                key={project.id}
                projectName={project.projectName}
                projectDescription={project.projectDescription}
              />
            );
          })}
        </div>
        {isOpen && (
          <Modal setIsOpen={setIsOpen}>
            <h3>Add new Project</h3>
            <div className="form-container">
              <label htmlFor="proeject-name">Enter Project name:</label>
              <input
                type="text"
                name="project-name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                required
              />
              <textarea
                name="project-description"
                id="project-description"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
              />
              <button type="submit" onClick={() => handleAddProject()} disabled={projectName.length < 3}>
                Add project
              </button>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
}
