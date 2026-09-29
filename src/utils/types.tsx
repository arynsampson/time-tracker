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
  title: string;
  completed: boolean;
  timeLogs: [];
  projectId?: string;
  created_at: string;
};

export type NewTaskModalProps = {
  heading: string;
  submitButtonCopy: string;
  taskTitle: string;
  projectOptionId: string;
  projects: Project[];
  submitDisabled: boolean;
  resetStateData: () => void;
  handleSubmitData: () => void;
  setTaskTitle: React.Dispatch<React.SetStateAction<string>>;
  setProjectOptionId: React.Dispatch<React.SetStateAction<string>>;
  setAddTaskModalisOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TasksTableProps = {
  tasks: Task[];
  projects: Project[];
  taskTitle: string;
  projectOptionId: string;
  handleMarkTaskAsCompleted: (taskId: string) => void;
  handleDeleteTask: (taskId: string) => void;
  handleUpdateTask: (taskId: string) => void;
  setTaskTitle: React.Dispatch<React.SetStateAction<string>>;
  setProjectOptionId: React.Dispatch<React.SetStateAction<string>>;
};

export type TasksTableRowItemProps = {
  task: Task;
  project: Project | undefined;
  projects: Project[];
  taskTitle: string;
  projectOptionId: string | undefined;
  handleUpdateTask: (taskId: string) => void;
  handleMarkTaskAsCompleted: (taskId: string) => void;
  handleDeleteTask: (taskId: string) => void;
  setTaskTitle: React.Dispatch<React.SetStateAction<string>>;
  setProjectOptionId: React.Dispatch<React.SetStateAction<string>>;
};

export type EditTaskModalProps = {
  taskId: string;
  heading: string;
  submitButtonCopy: string;
  taskTitle: string;
  projectOptionId: string | undefined;
  submitDisabled: boolean;
  projects: Project[];
  handleUpdateTask: (taskId: string) => void;
  setEditTaskModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTaskTitle: React.Dispatch<React.SetStateAction<string>>;
  setProjectOptionId: React.Dispatch<React.SetStateAction<string>>;
};
