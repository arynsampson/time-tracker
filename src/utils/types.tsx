export type Project = {
  projectId: string;
  projectName: string;
  projectDescription: string;
  projectColour: string;
  tasks: Task[];
  created_at: string;
};

export type Task = {
  id: string;
  name: string;
  completed: boolean;
  timeLogs: [];
  created_at: string;
};

export type TasksTableRowItemProps = {
  task: Task;
  project: Project;
  handleMarkTaskAsCompleted: (task: Task) => void;
  handleDeleteTask: (taskId: string) => void;
};

export type TasksTableProps = {
  projects: Project[];
  handleMarkTaskAsCompleted: (task: Task) => void;
  handleDeleteTask: (taskId: string) => void;
};
