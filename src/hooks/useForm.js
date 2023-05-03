import { useState, useEffect } from "react";
import { Constants } from "../utils/Constants";
export function useForm({ getCards, setShowComponents, cardNumber, cards }) {
  const [userName, setUserName] = useState( null );
  const [errorName, setErrorName] = useState(null);

  useEffect(() => {
    const userNameLS = localStorage.getItem("userName");
    const cardsLS = JSON.parse(localStorage.getItem("cards"));
    userNameLS && cardsLS?.length > 0 || userNameLS && cards?.length > 0  && setUserName(userNameLS);
  }, []);

  useEffect(() => {
    if (userName === "") {
      setErrorName(Constants.ERROR_NO_NAME );
      return;
    } else if (userName?.length < 2) {
      setErrorName( Constants.ERROR_NAME_MIN );
      return;
    } else {
      setErrorName(null);
    }
  }, [userName]);

  function handleChange(event) {
    const newName = event.target.value;
    setUserName(newName);
  }

  const nameHasError = (userName) => {
    if (userName === "" || userName === null) {
      setErrorName( Constants.ERROR_NO_NAME );
      return true;
    } else return false;
  };

  const handleSubmitName = (event) => {
    event.preventDefault();
    if (nameHasError(userName)) return;

    const fieldName = new window.FormData(event.target);
    const query = fieldName.get("playersName");

    setUserName(query);
    getCards({ cardNumber });
    setShowComponents((prev) => ({
      ...prev,
      showForm: false,
      showBoard: true,
    }));

    localStorage.setItem("userName", query);
  };
  return {
    userName,
    handleSubmitName,
    errorName,
    handleChange,
    setUserName
  };
}
