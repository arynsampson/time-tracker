import TasksTableRowItem from "./TasksTableRowItem";

import type { Project, Task, TasksTableProps } from "../utils/types";

export default function TasksTable({ tasks, projects, handleMarkTaskAsCompleted, handleDeleteTask }: TasksTableProps) {
  const tableRowItems = tasks.map((task: Task) => {
    return (
      <TasksTableRowItem
        key={task.id}
        task={task}
        project={projects.find((project) => project.projectId === task.projectId)}
        handleMarkTaskAsCompleted={handleMarkTaskAsCompleted}
        handleDeleteTask={handleDeleteTask}
      />
    );
  });

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Title</th>
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
