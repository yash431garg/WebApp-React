import { SET_EMPLOYEE_DATA,SET_PAYROLL_VIEW,SET_ADMIN_EMPLOYEE_DATA_VIEW } from './actions';

export function setEmployeeData(employeeData) {
    return { type: SET_EMPLOYEE_DATA, payload: employeeData };
}

export function setPayRollView(payRollView) {
    return { type: SET_PAYROLL_VIEW, payload: payRollView };
}
export function  setAdminEmployeeDataView(employeeData){
    return { type: SET_ADMIN_EMPLOYEE_DATA_VIEW, payload: employeeData };
}