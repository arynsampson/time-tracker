import { useState } from "react";
import { useStopwatch } from "react-timer-hook";

import type { Task } from "../utils/types";

export default function Timer() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [task, setTask] = useState("");

  let { seconds, minutes, hours, isRunning, start, pause, reset } = useStopwatch({ autoStart: false });

  const taskOptions = tasks.map((task) => (
    <option key={task.id} value={task.title}>
      {task.title}
    </option>
  ));

  const handleSaveTime = () => {};

  return (
    <>
      <div className="view">
        <h2>Timer</h2>
        <div className="timer-card">
          <h4>Task</h4>
          <div className="task-select">
            <select name="task" id="task" value={task} onChange={(e) => setTask(e.target.value)}>
              <option value="">--Select a task--</option>
              {taskOptions}
            </select>
          </div>
          <div className="timer-container">
            <div className="timer">
              <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>
            <div className="timer-buttons-container">
              <button className="btn btn-primary" onClick={isRunning ? pause : start} disabled={!task}>
                {isRunning ? "Pause" : "Start"}
              </button>
              <button
                className="btn bg-green"
                onClick={() => handleSaveTime()}
                disabled={!isRunning && seconds === 0 && minutes === 0 && hours === 0}
              >
                Save
              </button>
              <button
                className="btn bg-red"
                onClick={() => reset(undefined, false)}
                disabled={!isRunning && seconds === 0 && minutes === 0 && hours === 0}
              >
                Discard
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
