import { useState } from "react";

import Button from "../components/Button";
import NewTaskModal from "../components/NewTaskModal";

import type { Project } from "./Projects";

export type Task = {
  name: string;
  startTime: string;
  endTime: string;
  date: string;
};

export default function Tasks() {
  const [addTaskModalisOpen, setAddTaskModalisOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [projects, setProjects] = useState<Project[]>(() => {
    const savedProjects = localStorage.getItem("projects");
    return savedProjects ? JSON.parse(savedProjects) : [];
  });

  const resetStateData = () => {
    setTaskTitle("");
  };

  const handleAddNewTask = () => {};

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
            projects={projects}
            submitDisabled={taskTitle.length < 3}
            resetStateData={resetStateData}
            handleSubmitData={handleAddNewTask}
            setTaskTitle={setTaskTitle}
            setAddTaskModalisOpen={setAddTaskModalisOpen}
          />
        )}
        <div className="tasks-content-display">Tasks</div>
      </div>
    </>
  );
}
