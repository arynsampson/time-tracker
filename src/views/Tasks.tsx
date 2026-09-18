import { useState, useEffect } from "react";

import Button from "../components/Button";
import NewTaskModal from "../components/NewTaskModal";

import type { Project } from "./Projects";

export type Task = {
  id: string;
  name: string;
  timeLogs: [];
};

export default function Tasks() {
  const [addTaskModalisOpen, setAddTaskModalisOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [projectOptionId, setProjectOptionId] = useState("");
  const [projects, setProjects] = useState<Project[]>(() => {
    const savedProjects = localStorage.getItem("projects");
    return savedProjects ? JSON.parse(savedProjects) : [];
  });

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

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
            timeLogs: [],
          });
        }
        return project;
      });

      setProjects(updatedProjects);
    }
  };

  const tasksDisplay = projects.map((project) => {
    return (
      <div key={project.projectId}>
        <h4>{project.projectName}</h4>
        <div>
          {project.tasks.map((task) => {
            return <p key={task.id}>{task.name}</p>;
          })}
        </div>
      </div>
    );
  });

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
        <div className="tasks-content-display">{tasksDisplay}</div>
      </div>
    </>
  );
}
