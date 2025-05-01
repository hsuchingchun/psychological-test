"use client";

export default function MobileFrame({ children }) {
  return (
    <>
      <div className="w-[393px] h-[800px] bg-white rounded-2xl flex justify-center items-center">
        {children}
      </div>
    </>
  );
}
