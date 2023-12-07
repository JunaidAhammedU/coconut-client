import React, { useEffect, useState } from "react";
import Header from "../AdHeader/Header";
import { Button } from "flowbite-react";
import {
  handleUserBolckAndUnblock,
  getAllUserData,
} from "../../../Services/api/admin_API";
//-------------------------------------------------------------------------------------------

const UsersManagement = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      setUserData(await getAllUserData());
    };
    fetchAllUsers();
  }, [getAllUserData]);

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          {/* ---===---- */}
          <div className="grid">
            <div className="flex rounded items-center bg-gray-100 h-16 dark:bg-gray-800">
              <h1 className="text-start font-bold  ml-5 font-sans text-gray-600 text-2xl">
                User Management
              </h1>
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
                  {userData.map((data, ind) => {
                    return (
                      <tr className="font-sans text-sm" key={ind}>
                        <td className="px-4 py-2 ">{data?.UserName}</td>
                        <td className="px-4 py-2 ">{data?.email}</td>
                        <td className="px-4 py-2 ">
                          {new Date(data?.createdAt).toLocaleString("en-US", {
                            month: "long",
                            day: "numeric",
                          })}
                        </td>
                        <Button
                          className={`mt-2 h-8 w-24 rounded-lg text-white font-semibold text-xs transition duration-300 ${
                            data?.is_blocked ? "bg-red-500" : "bg-green-500"
                          }`}
                          onClick={() => {
                            handleUserBolckAndUnblock(data);
                          }}
                        >
                          {data?.is_blocked ? "blocked" : "active"}
                        </Button>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersManagement;
