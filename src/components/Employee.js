import React from "react";
import EmployeeTable from "./EmployeeTable";
import EmployeeCreate from "./EmployeeCreate";

class Employee extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <div className="w-screen md:w-[100%] m-auto py-0 md:py-4">
                <section className="px-8">
                    <h1 className="text-3xl font-extrabold ">Welcome to Employee Management System</h1>
                    <h4 className="text-xl font-semibold">Here you will get access to all the employees of the organization.</h4>
                </section>
                <div className="flex flex-col mt-8 lg:flex-row ">
                    <section className="w-full lg:w-1/2 "><EmployeeCreate /></section>
                    <section className="w-full lg:w-1/2 "><EmployeeTable /></section>
                </div>
            </div>
        );
    }
};

export default Employee;