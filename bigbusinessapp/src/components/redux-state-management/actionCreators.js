import { SET_EMPLOYEE_DATA } from './actions';

export function setEmployeeData(employeeData) {
    return { type: SET_EMPLOYEE_DATA, payload: employeeData };
}