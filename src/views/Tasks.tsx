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
  const [standaloneTasks, setStandaloneTasks] = useState<Task[]>(() => {
    const savedStandaloneTasks = localStorage.getItem("standaloneTasks");
    return savedStandaloneTasks ? JSON.parse(savedStandaloneTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("standaloneTasks", JSON.stringify(standaloneTasks));
  }, [projects, standaloneTasks]);

  const resetStateData = () => {
    setTaskTitle("");
    setProjectOptionId("");
  };

  const handleAddNewTask = () => {
    if (projectOptionId) {
      const updatedProjects: Project[] = projects.map((project) => {
        if (project.projectId === projectOptionId) {
          project.tasks.push({
            id: crypto.randomUUID(),
            name: taskTitle,
            completed: false,
            timeLogs: [],
            created_at: new Date().toISOString(),
          });
        }
        return project;
      });

      setProjects(updatedProjects);
    } else {
      setStandaloneTasks([
        ...standaloneTasks,
        {
          id: crypto.randomUUID(),
          name: taskTitle,
          completed: false,
          timeLogs: [],
          created_at: new Date().toISOString(),
        },
      ]);
    }
  };

  const handleMarkTaskAsCompleted = (updatedTask: Task) => {
    const updatedProjects: Project[] = projects.map((project) => {
      project.tasks.map((task) => {
        if (task.id === updatedTask.id) task.completed = !task.completed;
      });
      return project;
    });
    setProjects(updatedProjects);
  };

  const handleDeleteTask = (taskId: string) => {
    const updatedProjects: Project[] = projects.map((project) => {
      return {
        ...project,
        tasks: project.tasks.filter((task) => task.id !== taskId),
      };
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
            projects={projects}
            handleMarkTaskAsCompleted={handleMarkTaskAsCompleted}
            handleDeleteTask={handleDeleteTask}
          />
        </div>
      </div>
    </>
  );
}
