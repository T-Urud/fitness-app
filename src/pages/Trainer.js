import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Appointment from "../components/Appointment";

const Trainer = () => {
  const [trainerName, setTrainerName] = useState("Theo");
  const [date, setDate] = useState("");

  const formatDate = (date) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  const updateDate = () => {
    const now = new Date();
    setDate(formatDate(now));
  };

  useEffect(() => {
    updateDate();
  }, []);

  return (
    <div>
      <Header />
      <main className="relative">
        <div className="flex flex-col items-center bg-[#EEEDEB] py-6 px-10">
          <span className="font-semibold text-sm">{date}</span>
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[2rem] font-bold leading-none">
              Prepare for today's appointment
            </h1>
            <img
              src="./trainer-pic.jpg"
              alt="profile pic"
              className="w-full h-auto max-w-[96px] max-h-[96px] object-cover rounded-full my-4"
            />
            <p className="text-sm">
              You have your first virtual appointment with
              <span className="font-semibold"> {trainerName}</span> today.
              Review the checklist now to make the most of your time !
            </p>
            <div className="mt-4 w-full">
              <button className="bg-[#2758a3] py-3 px-5 rounded-full w-full font-semibold text-lg text-white">
                View checklist
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5 px-5">
          <div className="flex items-center justify-between mb-2 text-[0.8rem]">
            <h2 className="font-bold">Upcoming appointments</h2>
            <span className="uppercase font-semibold">View all</span>
          </div>
          <div className="flex flex-col gap-4">
            <Appointment />
            <Appointment />
            <Appointment />
            <Appointment />
            {/* click on view all --> apparition */}
          </div>
        </div>
      </main>
      <Navigation />
    </div>
  );
};

export default Trainer;
