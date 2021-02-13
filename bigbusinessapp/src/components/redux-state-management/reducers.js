import { combineReducers } from 'redux';

import { SET_EMPLOYEE_DATA, SET_PAYROLL_VIEW, SET_ADMIN_EMPLOYEE_DATA_VIEW } from './actions';

const employeeData = (state = '', action) => {
  if (action.type === SET_EMPLOYEE_DATA) {
    console.log(action.payload);
    let x = Object.assign({}, state, { employeeData: action.payload });
    console.log(x);
    return x;

  }
  return state;
};
const payRollView = (state = '', action) => {
  if (action.type === SET_PAYROLL_VIEW) {
    let x = Object.assign({}, state, { payRollView: action.payload });
    console.log(x);
    return x;
  }
  return state;
};
const adminEmployeeDataView = (state = '', action) => {
  if (action.type === SET_ADMIN_EMPLOYEE_DATA_VIEW) {
    let x = Object.assign({}, state, { adminEmployeeDataView: action.payload });
    console.log("Admin EMP View");
    console.log(x);
    return x;
  }
  return state;
};
const rootReducer = combineReducers({ employeeData, payRollView,adminEmployeeDataView });

export default rootReducer;