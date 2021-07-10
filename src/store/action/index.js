import { SET_TASK_DURATION_ACT, TASKCOMPLETE_ACT } from "../default/actions";
export const setTime = (time) => {
  return {
    type: SET_TASK_DURATION_ACT,
    time: time,
  };
};

export const taskCompleted = () => {
  return {
    type: TASKCOMPLETE_ACT,
  };
};
