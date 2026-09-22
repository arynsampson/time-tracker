export type Project = {
  projectId: string;
  projectName: string;
  projectDescription: string;
  projectColour: string;
  tasks: string[];
  created_at: string;
};

export type Task = {
  id: string;
  name: string;
  completed: boolean;
  timeLogs: [];
  projectId?: string;
  created_at: string;
};

export type TasksTableProps = {
  tasks: Task[];
  projects: Project[];
  handleMarkTaskAsCompleted: (taskId: string) => void;
  handleDeleteTask: (taskId: string) => void;
};

export type TasksTableRowItemProps = {
  task: Task;
  project: Project | undefined;
  handleMarkTaskAsCompleted: (taskId: string) => void;
  handleDeleteTask: (taskId: string) => void;
};
