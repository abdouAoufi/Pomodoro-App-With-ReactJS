import * as actions from "../default/actions";
import { updateObject } from "../default/updateObject";
const initialState = {
  duration: 1,
  taskCompleted: 0,
};

const taskCompleted = (state, action) => {
  if (state.taskCompleted < 4) {
    return updateObject(state, { taskCompleted: state.taskCompleted + 1 });
  }else{
    return updateObject(state, { taskCompleted: 4 });
  }
};

const setTimer = (state, action) => {
  return updateObject(state, { duration: action.time });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_TASK_DURATION_ACT:
      return setTimer(state, action);
    case actions.TASKCOMPLETE_ACT:
      return taskCompleted(state , action);
    default:
      return state;
  }
};

export default reducer;
