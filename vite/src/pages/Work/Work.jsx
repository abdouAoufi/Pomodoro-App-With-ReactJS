import React, { useState, useContext } from "react";
import { icons, header } from "../../assets/assets";
import { ProgressBar } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import { timecontext } from "../../context/timecontext";
import { Link } from "react-router-dom";

function Work(props) {
  const { time } = useContext(timecontext);
  console.log("===>",time);
  const [startStyle, setStartStyle] = useState(
    "py-2 px-4 rounded shadow-2xl text-white font-bold bg-my_blue"
  );
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
        <section className="mx-auto ">
          <div className="mx-2 my-6 p-8 h-80">
            <img src={header} alt="header" className="w-full h-full" />
          </div>
          <div className="w-full flex justify-between items-center px-6">
            <p className="font-light text-my_red ">12:24</p>
            <p className="font-light text-my_red "> 1 of 4</p>
          </div>
          <div className="mx-6 my-2 ">
            <ProgressBar percent={12} filledBackground="#39bdc8" />
          </div>
          <div className="mx-auto text-center mt-16 ">
            {/* // ! START */}
            <button className={startStyle}>cancel</button>
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
