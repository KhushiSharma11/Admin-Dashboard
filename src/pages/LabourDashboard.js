import React, { useState } from "react";
import './LabourDashboard.css';

function LabourDashboard() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1", status: "Incomplete" },
    { id: 2, name: "Task 2", status: "Incomplete" },
    { id: 3, name: "Task 3", status: "Incomplete" },
  ]);

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: "Completed" } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="dashboard">
      <h2 className="header">Labour Dashboard</h2>
      <div className="task-list">
        <h3>Assigned Tasks</h3>
        {tasks.length === 0 ? (
          <p>No tasks assigned.</p>
        ) : (
          <ul className="task-items">
            {tasks.map((task) => (
              <li key={task.id} className="task-item">
                <div className="task-card">
                  <div className="task-info">
                    <span className="task-name">{task.name}</span>
                    <span className="task-status">{task.status}</span>
                  </div>
                  {task.status === "Incomplete" && (
                    <button
                      className="complete-button"
                      onClick={() => completeTask(task.id)}
                    >
                      Complete Task
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default LabourDashboard;
