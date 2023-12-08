// Modal.js
import React from "react";

const Modal = ({
  id,
  title,
  btn_title,
  isOpen,
  onClose,
  onConfirm,
  recipeImg,
  recipeTitle,
}) => {
  if (!isOpen) return null;

  return (
    <dialog
      id={id}
      className="modal modal-bottom sm:modal-middle bg-black/50"
      open
    >
      <div className="modal-box">
        <p className="py-5">{title}</p>
        {recipeImg ? (
          <div className="avatar absolute left-12 bottom-3 ">
            <div className="w-20 rounded">
              <img src={`${recipeImg}`} />
            </div>
            <p className="px-4 font-abc font-semibold ">
              {recipeTitle.toUpperCase()}
            </p>
          </div>
        ) : null}
        <div className="modal-action">
          <button className="btn" onClick={onConfirm}>
            {btn_title}
          </button>
          <button className="btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
