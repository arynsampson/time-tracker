import { Trash } from "lucide-react";

export default function TimeLog() {
  return (
    <>
      <div className="time-log view">
        <h2>Time Log</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Project</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Duration</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Design Landing Page</td>
                <td>Website Redesign</td>
                <td>Today, 10:00 AM</td>
                <td>Today, 11:30 AM</td>
                <td>1.5 hours</td>
                <td>
                  <Trash color="#000" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
