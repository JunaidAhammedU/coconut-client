import React, { useEffect } from "react";

const Modal = ({ showModal, setShowModal }) => {
  useEffect(() => {
    const modal = document.getElementById("my_modal_1");
    if (showModal) {
      modal.showModal();
    } else {
      modal.close();
    }
  }, [showModal]);

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn" onClick={() => setShowModal(false)}>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
