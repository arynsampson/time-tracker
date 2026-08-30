import { EllipsisVertical } from "lucide-react";

export default function ProjectItem() {
  return (
    <div className="project-item">
      <div className="project-colour"></div>
      <div className="project-info">
        <p className="project-name">Test project</p>
        <p className="project-description">This is my first project</p>
      </div>
      <p className="project-hours">
        12.5 <span>hrs</span>
      </p>
      <div className="context-menu">
        <EllipsisVertical size="14px" />
      </div>
    </div>
  );
}
