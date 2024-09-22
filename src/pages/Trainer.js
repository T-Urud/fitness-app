import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Appointment from "../components/Appointment";
import { motion } from "framer-motion";

const Trainer = () => {
  const [trainerName, setTrainerName] = useState("Theo");
  const [nbOfAppointment, setNbOfAppointment] = useState(5);
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");

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

  const currentDate = () => {
    const now = new Date();
    setDate(formatDate(now));
  };

  const getDayDate = (day) => {
    const today = day.getDay();
    const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return weekDays[day.getDay()];
  };
  const currentDay = () => {
    const now = new Date();
    setDay(getDayDate(now));
  };

  useEffect(() => {
    currentDate();
    currentDay();
  }, []);

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="pb-4">
      <Header />
      <main>
        <div className="flex flex-col items-center bg-[#EEEDEB] py-6 px-10">
          <span className="font-semibold text-sm mb-2">{date}</span>
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
              You have your weekly virtual appointment with
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
            {!isClicked && (
              <span
                className="uppercase font-semibold cursor-pointer"
                onClick={() => setIsClicked(true)}
              >
                View all
              </span>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <Appointment date={date} day={day} />
            </div>
            {!isClicked && (
              <motion.div
                className="flex items-center justify-center h-8 bg-[#2758a3] text-white rounded-xl mt-4 font-semibold"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <span>
                  You have {nbOfAppointment}
                  {nbOfAppointment <= 1 ? " session" : " sessions"} left !
                </span>
              </motion.div>
            )}
            <motion.div
              className="flex-col gap-4"
              initial={{ display: "none", opacity: 0 }}
              animate={{
                display: isClicked ? "flex" : "none",
                opacity: isClicked ? [0, 0.6, 1] : 0,
              }}
              transition={{ duration: 0.3, ease: "easeIn" }}
            >
              <Appointment date={"Sep 30, 2024"} day={day} />
              <Appointment date={"Oct 7, 2024"} day={day} />
              <Appointment date={"Oct 14, 2024"} day={day} />
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Trainer;
