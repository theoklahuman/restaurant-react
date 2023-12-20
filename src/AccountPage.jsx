import { useState } from "react";

// function ShiftDiv({ shift }) {
//   return <div>{shift}</div>;
// }

function AccountPage({ user }) {
  const shift = [
    { time: "8am - 5pm" },
    { time: "8am-4pm" },
    { time: "9am - 6pm" },
    { time: "12pm - 10:45pm" },
    { time: "1pm - 5:30pm" },
    { time: "10am - 8pm" },
    { time: "6am to 1pm" },
  ];

  const [schedule, setSchedule] = useState(shift);
  const [scheduleVisibility, setScheduleVisibility] = useState("");

  function toggleScheduleVisibility() {
    if (scheduleVisibility) {
      setScheduleVisibility("");
    } else {
      setScheduleVisibility("visible");
    }
  }
  return (
    <>
      <h1 className="">Welcome {user}</h1>
      <ul className="list-group">
        <li
          className="list-group-item list-group-item-action btn"
          onClick={toggleScheduleVisibility}
        >
          My Schedule
        </li>
        {scheduleVisibility
          ? schedule.map((days, index) => (
              <li key={index} className="list-group-item list-group-item-action btn">
                {days.time}
              </li>
            ))
          : null}
        <li
          className="list-group-item list-group-item-action dropdown-toggle btn"
          data-bs-toggle="dropdown"
          role="button"
          aria-expanded="false"
        >
          Request
        </li>
        <ul className="dropdown-menu">
          <li>
            <a href="" className="dropdown-item">
              Time Off
            </a>
          </li>
          <li>
            <a href="" className="dropdown-item">
              Tuition Assistance
            </a>
          </li>
          <li>
            <a href="" className="dropdown-item">
              Time Correction
            </a>
          </li>
        </ul>
        <a href="#" className="list-group-item list-group-item-action">
          Training
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Employee Handbook
        </a>
      </ul>
    </>
  );
}

export default AccountPage;
