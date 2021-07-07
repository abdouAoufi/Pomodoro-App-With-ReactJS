import React from "react";

function Quick(props) {
  const prp = "px-5 shadow py-1 h-auto text-center  rounded-2xl mx-2 cursor-pointer " + props.color;
  return (
    <div className={prp} onClick={() => props.changeTime(props.time)}>
      <div className=" mt-4 rounded-full  p-6 bg-white bg-opacity-40">
        <h2 className="font-extrabold text-2xl text-white">{props.time}'</h2>
      </div>
      <div className="mt-4">
        <h5 className="font-medium uppercase text-lg text-white">
          {props.name}
        </h5>
      </div>
    </div>
  );
}

export default Quick;
