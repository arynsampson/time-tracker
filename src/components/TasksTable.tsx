import TasksTableRowItem from "./TasksTableRowItem";

import type { Task, TasksTableProps } from "../utils/types";

export default function TasksTable({
  tasks,
  projects,
  taskTitle,
  projectOptionId,
  handleMarkTaskAsCompleted,
  handleDeleteTask,
  handleUpdateTask,
  setTaskTitle,
  setProjectOptionId,
}: TasksTableProps) {
  const tableRowItems = tasks.map((task: Task) => {
    return (
      <TasksTableRowItem
        key={task.id}
        task={task}
        project={projects.find((project) => project.projectId === task.projectId)}
        projects={projects}
        taskTitle={taskTitle}
        projectOptionId={projectOptionId}
        handleMarkTaskAsCompleted={handleMarkTaskAsCompleted}
        handleDeleteTask={handleDeleteTask}
        handleUpdateTask={handleUpdateTask}
        setTaskTitle={setTaskTitle}
        setProjectOptionId={setProjectOptionId}
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
