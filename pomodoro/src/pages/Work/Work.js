import React, { useState, useEffect } from "react";
import { icons, header } from "../../assets/assets";
import { ProgressBar } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import Modal from "../../components/Modal/Modal";
import TimeContext from "../../context/timeContext";
import { Link } from "react-router-dom";

function Work(props) {
  const [openModal, setOpenModal] = useState(false);
  const [minutes, setMinutes] = useState(props.time);
  const [seconds, setSeconds] = useState(0);
  const [progress, setProgress] = useState(0);
  const [start, setStart] = useState(false);
  let initialTime = props.time * 60 * 1000;
  const [time, setTime] = useState(initialTime);
  const [startStyle, setStartStyle] = useState(
    "py-2 px-4 rounded shadow-2xl text-white font-bold bg-my_blue"
  );
  const [textBtn, setTextBnt] = useState("start");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0 && start) {
        setTime(time - 1000);
        setMinutes(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor(time % (1000 * 60)) / 1000);
      }
      setProgress(Math.floor(100 - (time * 100) / initialTime));
    }, 50);
    return () => clearTimeout(timer);
  }, [time, start]);

  const startTimer = () => {
    if (!start) {
      setStartStyle(
        "py-2 px-4 rounded shadow-2xl text-white font-bold bg-my_red"
      );
      setTextBnt("Give up");
      setStart(true);
    } else {
      setOpenModal(true);
    }
  };
  const confirmedState = () => {
    setStartStyle(
      "py-2 px-4 rounded shadow-2xl text-white font-bold bg-my_blue"
    );
    setTextBnt("start");
    setStart(false);
    setTime(props.time * 1000);
    setMinutes(props.time);
    setSeconds(0);
    setOpenModal(false);
  };
  return (
    <TimeContext.Provider value={{ status: start, setStatus: setStart }}>
      {/* // ! MODAL */}
      {openModal ? (
        <Modal openModal={openModal}>
          <p className="text-medium"> Are you sure to "GIVE UP "? </p>
          <div className="flex justify-between p-4">
            <button
              onClick={() => setOpenModal(!openModal)}
              className="py-2 px-4 rounded shadow-2xl text-white font-bold bg-my_red"
            >
              NO
            </button>
            <button
              onClick={confirmedState}
              className="py-2 px-4 rounded shadow-2xl text-white font-bold bg-my_blue"
            >
              YES
            </button>
          </div>
        </Modal>
      ) : null}
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
          <section className="mx-auto ">
            <div className="mx-2 my-6 p-8 h-80">
              <img src={header} alt="header" className="w-full h-full" />
            </div>
            <div className="w-full flex justify-between items-center px-6">
              <p className="font-light text-my_red ">
                {minutes < 10 ? `0${minutes}` : minutes} :{" "}
                {seconds < 10 ? `0${seconds}` : seconds}
              </p>
              <p className="font-light text-my_red ">2 of 4</p>
            </div>
            <div className="mx-6 my-2 ">
              <ProgressBar percent={progress} filledBackground="#39bdc8" />
            </div>
            <div className="mx-auto text-center mt-16 ">
              {/* // ! START */}
              <button onClick={startTimer} className={startStyle}>
                {textBtn}
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
    </TimeContext.Provider>
  );
}

export default Work;
