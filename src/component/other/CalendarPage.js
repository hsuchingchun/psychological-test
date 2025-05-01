"use client";

export default function CalendarPage({ year, month, day, weekDay }) {
  return (
    <div
      className="relative bg-gray-100 w-[320px] h-[480px] rounded-2xl flex items-center justify-center flex-col
      shadow-sm text-blue-500"
    >
      <div className="flex justify-between gap-3">
        <div className="">{year}</div>
        <div>{month}</div>
        {/* <div className="">五月</div> */}
      </div>
      <div className="text-[240px]">{day}</div>
      <div className="text-[30px]">{weekDay}</div>
    </div>
  );
}
