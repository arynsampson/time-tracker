import TasksTableRowItem from "./TasksTableRowItem";

import type { Project, Task, TasksTableProps } from "../utils/types";

export default function TasksTable({ projects, handleMarkTaskAsCompleted }: TasksTableProps) {
  const tableRowItems = projects.map((project: Project) => {
    return project.tasks.map((task: Task) => {
      return (
        <TasksTableRowItem
          key={task.id}
          project={project}
          task={task}
          handleMarkTaskAsCompleted={handleMarkTaskAsCompleted}
        />
      );
    });
  });

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Project</th>
            <th>Type</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{tableRowItems}</tbody>
      </table>
    </div>
  );
}
