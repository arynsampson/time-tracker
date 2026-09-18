import { EllipsisVertical } from "lucide-react";
import ProjectColour from "./ProjectColour";

export default function TasksTable({ projects }) {
  const tableRowItems = projects.map((project) => {
    return project.tasks.map((task) => {
      return (
        <tr key={task.id}>
          <td>{task.name}</td>
          <td className="tasks-table-project-cell">
            <ProjectColour colour={project.projectColour} />
            {project.projectName}
          </td>
          <td>
            <p className="project-type-cell">Project</p>
          </td>
          <td className="tasks-table-context-menu">
            <div className="tasks-table-context-menu-container">
              <EllipsisVertical size="16px" />
            </div>
          </td>
        </tr>
      );
    });
  });
  return (
    <>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Project</th>
              <th>Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{tableRowItems}</tbody>
        </table>
      </div>
    </>
  );
}
