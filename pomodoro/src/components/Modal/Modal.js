import React from "react";
import Transition from "../Transition/Transition";


function Modal(props) {
  
  return (
    <div className="grid place-center ">
      <Transition
        className="fixed inset-0 bg-gray-900  bg-opacity-40 z-0 transition-opacity"
        show={props.openModal}
        appear={props.openModal}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />
      <Transition
        id="search-modal"
        className="fixed overflow-hidden inset-0 z-50 overflow-hidden top-1/3 flex items-start mb-4 justify-center transform px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        show={props.openModal}
        appear={props.openModal}
        enter="transition ease-in-out duration-200"
        enterStart="opacity-0 translate-y-4"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-200"
        leaveStart="opacity-100 translate-y-0"
        leaveEnd="opacity-0 translate-y-4"
      >
        <div className="rounded-lg text-center p-2 w-5/6 min-h-1/4 bg-white sm:w-auto sm:px-4 lg:w-56 lg:p-4">
          {props.children}
        </div>
      </Transition>
    </div>
  );
}

export default Modal;
