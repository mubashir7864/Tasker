import React, { useRef } from "react";

const Model = ({ children, showModal, setShowModal }) => {
  const modelRef = useRef(); // modelRef is passed to the jsx TodoModal container ...  reference

  const closeModal = (e) => {
    if (e.target === modelRef.current) {
      setShowModal(false);
    }
  };
  return (
    showModal && (
      <div className="TodoModal" onClick={closeModal} ref={modelRef}>
        <div className="todoModalContainer">{children}</div>
      </div>
    )
  );
};

export default Model;
