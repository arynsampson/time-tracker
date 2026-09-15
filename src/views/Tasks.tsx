import { useState } from "react";

import Button from "../components/Button";
import NewTaskModal from "../components/NewTaskModal";

export type Task = {
  name: string;
  startTime: string;
  endTime: string;
  date: string;
};

export default function Tasks() {
  const [addTaskModalisOpen, setAddTaskModalisOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");

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
