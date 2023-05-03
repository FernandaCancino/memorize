import React from "react";
import "./ModalInformation.scss"

export const ModalInformation = ({
  show,
  id,
  title,
  message,
  handleClose,
}) => {
  return (
    <div
      className={`modal fade ${show ? "show modal-information--show" : "modal-information"}`}
      id={id}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              {title}
            </h5>
          </div>
          <div className="modal-body">
            {message}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn modal-information__button" onClick={handleClose}>
              Jugar de nuevo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
