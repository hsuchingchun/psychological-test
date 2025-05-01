"use client";
import { DatePicker } from "antd";
import CalendarPage from "@/component/other/CalendarPage";

export default function TestUI() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
    alert("你選的是" + dateString);
  };

  const days = [
    { year: "2025", month: "五月", day: "01", weekDay: "星期四" },
    { year: "2025", month: "五月", day: "02", weekDay: "星期五" },
    { year: "2025", month: "五月", day: "03", weekDay: "星期六" },
  ];

  return (
    <div className="w-screen h-screen justify-center items-center flex flex-wrap gap-5 overflow-y ">
      {/* <DatePicker onChange={onChange} needConfirm /> */}

      {days.map((day, index) => (
        <CalendarPage
          key={"cal" + index}
          year={day.year}
          month={day.month}
          day={day.day}
          weekDay={day.weekDay}
        />
      ))}
    </div>
  );
}
