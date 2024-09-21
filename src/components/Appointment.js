import React from "react";

const Appointment = () => {
  return (
    <div className="bg-[#EEEDEB] rounded-xl p-4 cursor-pointer">
      <div className="rounded-full bg-[#2758a3] max-w-[75px] text-white flex items-center justify-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="12"
          width="12"
          viewBox="0 0 576 512"
        >
          <path
            fill="#ffffff"
            d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"
          />
        </svg>
        <span className="text-xs">Virtual</span>
      </div>
      <div className="flex flex-col font-bold mt-2 leading-tight">
        <div className="flex items-center justify-between">
          <h3>Today Aug 26, 6:00 PM</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            width="18"
            viewBox="0 0 448 512"
          >
            <path
              fill="#000000"
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </div>
        <span className="font-light text-[0.8rem]">
          Leighan St - P.T Care plan name
        </span>
      </div>
    </div>
  );
};

export default Appointment;
