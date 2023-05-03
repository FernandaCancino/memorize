import { useEffect, useState } from "react";

export function useShowModal({ hits, cardNumber, newGame }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (hits === cardNumber) {
      handleShow();
    }
  }, [hits]);

  const handleClose = () => {
    setShowModal(false);
    newGame();
  };

  const handleShow = () => {
    setShowModal(true);
  };

  return {
    showModal,
    handleClose,
  };
}
