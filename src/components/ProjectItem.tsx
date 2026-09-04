import { EllipsisVertical } from "lucide-react";
import type { Project } from "../views/Projects";

type ProjectItemProps = {
  project: Project;
};

export default function ProjectItem({ project }: ProjectItemProps) {
  return (
    <div className="project-item">
      <div className="project-colour" style={{ backgroundColor: project.projectColour }}></div>
      <div className="project-info">
        <p className="project-name">{project.projectName}</p>
        <p className="project-description">{project.projectDescription}</p>
      </div>
      <p className="project-hours">
        0 <span>hrs</span>
      </p>
      <div className="context-menu">
        <EllipsisVertical size="14px" />
      </div>
    </div>
  );
}
