import { useState, useEffect } from "react";

import Button from "../components/Button";
import NewTaskModal from "../components/NewTaskModal";
import TasksTable from "../components/TasksTable";

import type { Project, Task } from "../utils/types";

export default function Tasks() {
  const [addTaskModalisOpen, setAddTaskModalisOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [projectOptionId, setProjectOptionId] = useState("");
  const [projects, setProjects] = useState<Project[]>(() => {
    const savedProjects = localStorage.getItem("projects");
    return savedProjects ? JSON.parse(savedProjects) : [];
  });
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [projects, tasks]);

  const resetStateData = () => {
    setTaskTitle("");
    setProjectOptionId("");
  };

  const handleAddNewTask = () => {
    const taskId = crypto.randomUUID();

    if (projectOptionId) {
      const updatedProjects: Project[] = projects.map((project) => {
        if (project.projectId === projectOptionId) {
          project.tasks.push(taskId);
        }
        return project;
      });

      setProjects(updatedProjects);
    }

    setTasks([
      ...tasks,
      {
        id: taskId,
        name: taskTitle,
        completed: false,
        timeLogs: [],
        projectId: projectOptionId ? projectOptionId : undefined,
        created_at: new Date().toISOString(),
      },
    ]);
  };

  const handleMarkTaskAsCompleted = (taskId: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) task.completed = !task.completed;
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId: string) => {
    // delete task from tasks
    const updatedTasks: Task[] = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);

    // delete task from projects
    const updatedProjects: Project[] = projects.map((project) => {
      project.tasks = project.tasks.filter((task) => task !== taskId);
      return project;
    });
    setProjects(updatedProjects);
  };

  return (
    <>
      <div className="tasks view-with-btn">
        <h2>Tasks</h2>
        <Button text="New Task" setAddTaskModalisOpen={setAddTaskModalisOpen} />
        {addTaskModalisOpen && (
          <NewTaskModal
            heading="Create New Task"
            submitButtonCopy="Create Task"
            taskTitle={taskTitle}
            projectOptionId={projectOptionId}
            projects={projects}
            submitDisabled={taskTitle.length < 3}
            resetStateData={resetStateData}
            handleSubmitData={handleAddNewTask}
            setTaskTitle={setTaskTitle}
            setProjectOptionId={setProjectOptionId}
            setAddTaskModalisOpen={setAddTaskModalisOpen}
          />
        )}
        <div className="tasks-content-display">
          <TasksTable
            tasks={tasks}
            projects={projects}
            handleMarkTaskAsCompleted={handleMarkTaskAsCompleted}
            handleDeleteTask={handleDeleteTask}
          />
        </div>
      </div>
    </>
  );
}
