import { combineReducers } from 'redux';

import { SET_EMPLOYEE_DATA } from './actions';

const employeeData = (state = '', action) => {
    if (action.type === SET_EMPLOYEE_DATA) {
        let x = Object.assign({}, state, { employeeData: action.payload });
        console.log(x);
      return x;

    }
    return state;
  };

  const rootReducer = combineReducers({ employeeData });

export default rootReducer;