import React from "react";

const ListModal = ({ id, title, userData }) => {
  return (
    <>
      <dialog id={id} className="modal">
        <div className="modal-box ultraSm:w-11/12 md:w-11/12 lg:w-1/2 xl:w-1/2 2xl:w-1/2 max-w-5xl">
          <h3 className="font-bold text-lg text-center ">{title}</h3>
          <div className="modal-action flex justify-center">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>

              <div className="overflow-y-auto min-w-[300px] max-w-[700px] max-h-[300px] min-h-[200px]">
                <table className="table ">
                  <thead>
                    <tr>
                      <th>Name</th>
                    </tr>
                  </thead> 
                  <tbody>
                    {userData?.map((data, ind) => {
                      return (
                        <tr key={ind}>
                          <td>
                            <div className="font-bold">{data?.UserName}</div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ListModal;
