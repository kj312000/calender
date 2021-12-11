import React, { useState } from "react";
import { render } from "react-dom";
import Calendar from "react-calendar";
import './index.css'

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  return (
    <div className="main">
      <h1>Calender!</h1>
      <Calendar showWeekNumbers onChange={onChange} value={date} />
      <br/>
      {date.toLocaleString()}
    </div>
  );
};

render(<ReactCalendar />, document.querySelector("#root"));
