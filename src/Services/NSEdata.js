import axios from "axios";
import React from "react";

const NSE_API_BASE_URL="http://localhost:5000/api/NSE_data1";


class NSE_data1 {

    constructor(props)
    {
    super(props)
    }

    getTable(){
        return axios.get(NSE_API_BASE_URL);

    }
    // getEmployeesById(employeeId){
    //     return axios.get(NSE_API_BASE_URL+'/'+employeeId);
    // }
    // createEmployee(employee){
    //     return axios.get(NSE_API_BASE_URL,employee);
    // }
    // updateEmployee(employee,employeeId){
    //     return axios.get(NSE_API_BASE_URL+'/'+employeeId,employee);
    // }
    // deleteEmployee(employeeId){
    //     return axios.get(NSE_API_BASE_URL+'/'+employeeId);
    // }
    
 
}

export default new NSE_data1();