import React from "react";

class EmployeeTable extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div className="p-0 mt-8 lg:mt-0 lg:p-12 ">
        <h2 className="text-lg font-bold text-center underline">List Of Employees</h2>
        <div className="px-4 lg:px-12 min-h-full">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead
                      className="border-b  font-medium dark:border-neutral-500 dark:bg-neutral-600">
                      <tr>
                        <th scope="col" className="px-6 py-4">#</th>
                        <th scope="col" className="px-6 py-4">First</th>
                        <th scope="col" className="px-6 py-4">Last</th>
                        <th scope="col" className="px-6 py-4">Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        className="border-b  dark:border-neutral-500 dark:bg-neutral-700">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                        <td className="whitespace-nowrap px-6 py-4">Mark</td>
                        <td className="whitespace-nowrap px-6 py-4">Otto</td>
                        <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                      </tr>
                      <tr
                        className="border-b  dark:border-neutral-500 dark:bg-neutral-600">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                        <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                        <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                        <td className="whitespace-nowrap px-6 py-4">@fat</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default EmployeeTable;