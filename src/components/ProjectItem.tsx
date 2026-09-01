import { EllipsisVertical } from "lucide-react";

type ProjectItemProps = {
  projectName: string;
  projectDescription: string;
};

export default function ProjectItem({ projectName, projectDescription }: ProjectItemProps) {
  return (
    <div className="project-item">
      <div className="project-colour"></div>
      <div className="project-info">
        <p className="project-name">{projectName}</p>
        <p className="project-description">{projectDescription}</p>
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
