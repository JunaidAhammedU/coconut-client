import React, { useEffect, useState } from "react";
import Header from "../AdHeader/Header";
import axios from "axios";
import { Button } from "flowbite-react";
import { ToastContainer } from "react-toastify";
import { userBolck } from "../../../utils/Admin/HandleFunction";
//--------------------------------------------------------------

const Users = () => {
  const [userData, setUserData] = useState([]);

  const getData = () => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/admin/getuser`)
      .then((data) => {
        if (data) {
          setUserData(data.data.response);
        } else {
          console.log("not data fetched");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <Header />
      <div className="p-4 sm:ml-64 ">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          {/* ---===---- */}
          <div className="grid">
            <div className="flex rounded items-center bg-gray-100 h-16 dark:bg-gray-800">
              <h1 className="text-start font-bold  ml-5 font-sans text-gray-600 text-2xl">User Management</h1>
            </div>
          </div>

          {/* ---===---- */}
          <div className="flex flex-col items-center justify-between h-96 mb-4 rounded-lg dark:bg-gray-800 mt-3 ">
            <div className="w-full overflow-x-auto rounded-lg ">
              <table className="min-w-full border-none text-left">
                <thead>
                  <tr className="border-gray-400 bg-gray-200 font-sans text-sm font-normal text-gray-600">
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Registered Date</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((data) => {
                    return (
                      <tr className="font-sans text-sm">
                        <td className="px-4 py-2 ">{data.UserName}</td>
                        <td className="px-4 py-2 ">{data.email}</td>
                        <td className="px-4 py-2 ">{data.createdAt}</td>
                        <Button
                          className={`mt-2 h-8 w-24 rounded-lg text-white font-semibold text-xs transition duration-300 ${data.is_blocked ? 'bg-red-500' : 'bg-green-500'}`}
                          onClick={() =>{ userBolck(data); getData();}}>
                          {data.is_blocked ? "blocked" : "active"}
                        </Button>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="w-full flex items-center justify-end mt-4">
              <button className="bg-gray-500 text-white px-4 py-1 rounded-md mr-2">
                Previous
              </button>
              <button className="bg-gray-500 text-white px-4 py-1 rounded-md">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Users;
