import React, { useContext } from "react";
import { icons, header } from "../../assets/assets";
import Quick from "../../components/Quick/Quick";
import { Link } from "react-router-dom";
import { timecontext } from "../../context/timecontext";
import { useHistory } from "react-router-dom";

function Home(props) {
  const history = useHistory();
  const { setTime } = useContext(timecontext);
  const startWork = (timeSelected) => {
    setTime(timeSelected);
    history.push("/start");
  };
  return (
    <div>
      {/* // * NAVBAR  */}
      <header>
        <nav>
          <div className="w-full flex justify-between items-center p-4">
            <div>
              <img
                src={icons.stats}
                alt="stats"
                className="w-8 h-8 cursor-pointer"
              />
            </div>
            <div>
              <img
                src={icons.sun}
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
          <div className="mx-auto my-2  text-center">
            <button
              onClick={() => startWork(25)}
              className="py-2 px-4 rounded shadow-lg text-white font-bold bg-my_blue"
            >
              START
            </button>
          </div>
        </section>
      </main>
      {/* // * QUICK START  */}
      <div className="w-full flex justify-between items-center p-4">
        <div>
          <p className="font-semibold text-lg text-my_voilet "> POMODOROS </p>
        </div>
        <div>
          <img
            src={icons.settings}
            alt="stats"
            className="w-6 h-6 cursor-pointer"
          />
        </div>
      </div>
      {/* // ? container of quicks */}
      <div className="flex px-2 overflow-auto">
        <div onClick={() => startWork(30)}>
          <Quick name="working" time="30" color="bg-my_blue" />
        </div>
        <div onClick={() => startWork(25)}>
          <Quick name="reading" time="25" color="bg-primary" />
        </div>
        <div onClick={() => startWork(35)}>
          <Quick name="learning" time="35" color="bg-my_red" />{" "}
        </div>
      </div>
      <div className="text-center mx-auto cursor-pointer mt-4">
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
    </div>
  );
}

export default Home;
