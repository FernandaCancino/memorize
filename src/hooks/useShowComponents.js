import { useState, useEffect } from "react";

export function useShowComponents() {
  const [showComponents, setShowComponents] = useState({
    showBoard: false,
    showForm: false,
    showReload: false,
  });

  useEffect(() => {
    const userNameLS = localStorage.getItem("userName");
    const isReloadPageLS = localStorage.getItem("reloadPage");
    const cardsLS = JSON.parse(localStorage.getItem("cards"));
    setShowComponents((prev) => ({
      ...prev,
      showBoard: false,
    }));
    if (isReloadPageLS) {
      if (userNameLS && cardsLS.length > 0) {
        setShowComponents((prev) => ({
          ...prev,
          showReload: true,
        }));
      } else {
        setShowComponents((prev) => ({
          ...prev,
          showForm: true,
        }));
      }
    } else {
      setShowComponents((prev) => ({
        ...prev,
        showForm: true,
      }));
    }
  }, []);

  return {
    showComponents,
    setShowComponents,
  };
}
