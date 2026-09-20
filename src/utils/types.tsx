export type Project = {
  projectId: string;
  projectName: string;
  projectDescription: string;
  projectColour: string;
  tasks: Task[];
};

export type Task = {
  id: string;
  name: string;
  timeLogs: [];
};

export type TasksTableRowItemProps = {
  task: Task;
  project: Project;
};

export type TasksTableProps = {
  projects: Project[];
};
