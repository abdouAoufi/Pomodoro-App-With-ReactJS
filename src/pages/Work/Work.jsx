import React, { useState, useContext, useEffect } from "react";
import { icons, header } from "../../assets/assets";
import { ProgressBar } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import { timecontext } from "../../context/timecontext";
import { Link } from "react-router-dom";

function Work() {
  const btnStyle = {
    start: "py-2 px-4 rounded shadow-2xl text-white font-bold bg-my_blue",
    stop: "py-2 px-4 rounded shadow-2xl text-white font-bold bg-red-500",
  };
  const { time } = useContext(timecontext);
  const initialTime = time * 60 * 1000 || 25 * 60 * 1000;
  const [start, setStart] = useState(false);
  const [lap, setLap] = useState(1);
  const [progress, setProgress] = useState(0);
  const [minutes, setMinutes] = useState(time);
  const [seconds, setSeconds] = useState(0);
  const [currentTime, setCurrentTime] = useState(time * 60 * 1000);
  const [startStyle, setStartStyle] = useState({
    style: btnStyle.start,
    text: "Start",
  });

  const handleTimeOperation = () => {
    if (lap >= 4) setLap(1);
    let updatedStyle = { ...startStyle };
    if (!start) {
      updatedStyle.style = btnStyle.stop;
      updatedStyle.text = "Stop";
    } else {
      updatedStyle.style = btnStyle.start;
      updatedStyle.text = "Start";
      reset();
    }
    setStartStyle(updatedStyle);
    setStart(!start);
  };

  const reset = () => {
    setMinutes(time);
    setSeconds(0);
    setCurrentTime(initialTime);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentTime <= 0) {
        handleTimeOperation();
        reset();
        setLap(lap + 1);
      }
      if (currentTime > 0 && start) {
        setCurrentTime(currentTime - 1000);
        setMinutes(Math.floor((currentTime % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor(currentTime % (1000 * 60)) / 1000);
      }
      setProgress(Math.floor(100 - (currentTime * 100) / initialTime));
    }, 1000);
    return () => clearTimeout(timer);
  }, [currentTime, start]);

  return (
    <div className="z-100">
      {/* // * NAVBAR  */}
      <header>
        <nav>
          <div className="w-full flex justify-between items-center p-4">
            <div>
              <Link to="/">
                <img
                  src={icons.back}
                  alt="stats"
                  className="w-8 h-8 cursor-pointer"
                />
              </Link>
            </div>
            <div>
              <p className="font-bold text-2xl text-my_blue "> POMODOROS </p>
            </div>
            <div>
              <img
                src={icons.edit}
                alt="stats"
                className="w-8 h-8 cursor-pointer"
              />
            </div>
          </div>
        </nav>
      </header>

      {/* // * HERO  */}
      <main>
        <section className="mx-auto h-screen">
          <div className="mx-2 my-6 p-8 h-80">
            <img src={header} alt="header" className="w-full h-full" />
          </div>
          <div className="w-full flex justify-between items-center px-6">
            <p className="font-light text-my_red ">
              {minutes < 10 ? `0${minutes}` : minutes} :{" "}
              {seconds < 10 ? `0${seconds}` : seconds}
            </p>
            <p className="font-light text-my_red "> {lap} of 4</p>
          </div>
          <div className="mx-6 my-2 ">
            <ProgressBar percent={progress} filledBackground="#39bdc8" />
          </div>
          <div className="mx-auto text-center mt-16 ">
            {/* // ! START */}
            <button onClick={handleTimeOperation} className={startStyle.style}>
              {startStyle.text}
            </button>
          </div>
          <div className="text-center mx-auto cursor-pointer mt-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#c4c4c4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 8h16M4 16h16"
              />
            </svg>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Work;
