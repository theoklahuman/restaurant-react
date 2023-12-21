import { useState } from "react";

function AccountPage({ user }) {
  const shift = [
    { day: "Monday", time: "8am - 5pm" },
    { day: "Tuesday", time: "8am-4pm" },
    { day: "Wednesday", time: "9am - 6pm" },
    { day: "Thursday", time: "12pm - 10:45pm" },
    { day: "Friday", time: "1pm - 5:30pm" },
    { day: "Saturday", time: "10am - 8pm" },
    { day: "Sunday", time: "6am to 1pm" },
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
          ? schedule.map((shift, index) => (
              <li
                key={index}
                className="list-group-item list-group-item-action btn bg-secondary"
              >
                {shift.day} : {shift.time}
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
          <li className="dropdown-item btn">
              Time Off
          </li>
          <li className="dropdown-item btn">
              Tuition Assistance
          </li>
          <li className="dropdown-item btn">
              Time Correction
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
