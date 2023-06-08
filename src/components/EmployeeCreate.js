import React from "react";
import axios from "axios";
import employees from '../../src/employees'

class EmployeeCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      age: 0,
      dateOfJoining: '',
      title: '',
      department: '',
      employeeType: ''
    }
  };

  // validateForm =(value)=>{
  //     // console.log(value);
  //     Object.values(value).map(e=>{
  //         console.log(e);
  //         if(e.length == 0 || e < 1){
  //             alert("Form error");
  //             return;
  //         }
  //     })
  // }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitForm = (e) => {
    e.preventDefault();
    // this.validateForm(this.state);
    console.log(e.target.value);
  }

  render() {
    const { firstName, lastName, age, dateOfJoining, title, department, employeeType } = this.state;
    return (
      <div>
        <form className="p-4 md:p-12" onSubmit={this.submitForm}>
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-white-900">Employee Information</h2>
            <p className="mt-1 text-sm leading-6 text-gray-300">Enter the Employee's Info in this form.</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-200">
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="given-name"
                    value={firstName}
                    onChange={this.onChange}
                    placeholder="First Name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-200">
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete="family-name"
                    value={lastName}
                    onChange={this.onChange}
                    placeholder="Last Name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="age" className="block text-sm font-medium leading-6 text-gray-200">
                  Age
                </label>
                <div className="mt-2">
                  <input
                    id="age"
                    name="age"
                    type="number"
                    autoComplete="age"
                    value={age}
                    onChange={this.onChange}
                    placeholder="Age"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="dateOfJoining" className="block text-sm font-medium leading-6 text-gray-200">
                  Date Of Joining
                </label>
                <div className="mt-2">
                  <input
                    id="dateOfJoining"
                    name="dateOfJoining"
                    autoComplete="dateOfJoining"
                    type="date"
                    value={dateOfJoining}
                    onChange={this.onChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-200">
                  Title
                </label>
                <div className="mt-2">
                  <select
                    type="text"
                    name="title"
                    id="title"
                    autoComplete="title"
                    value={title}
                    onChange={this.onChange}
                    placeholder="Title"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option>--</option>
                    <option>Employee</option>
                    <option>Manager</option>
                    <option>Director</option>
                    <option>VP</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="department" className="block text-sm font-medium leading-6 text-gray-200">
                  Department
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="department"
                    id="department"
                    autoComplete="department"
                    value={department}
                    onChange={this.onChange}
                    placeholder="Department"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="employeeType" className="block text-sm font-medium leading-6 text-gray-200">
                  Employee Type
                </label>
                <div className="mt-2">
                  <select
                    type="text"
                    name="employeeType"
                    id="employeeType"
                    autoComplete="employeeType"
                    value={employeeType}
                    onChange={this.onChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option>--</option>
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Contract</option>
                    <option>Seasonal</option>
                  </select>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-200">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
};

export default EmployeeCreate;