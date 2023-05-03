import { FaFeatherAlt } from "react-icons/fa";
import "./Form.scss";
import { Constants } from "../../utils/Constants";

export const Form = ({ handleSubmitName, showForm, errorName, handleChange }) => {

  const error = errorName === null ? false : true;

  return (
    <>
      <form className={showForm ? "form form--show" : "form form--no-show"} onSubmit={handleSubmitName}>
        <h2> { Constants.WELCOME_SUBTITLE} </h2>
        <div className="form__inputs">
          <label className="form__label">
            <FaFeatherAlt className="form__icon" />{" "}
          </label>
          <input
            onChange={handleChange}
            className={error ? "form__input form__input--error" : "form__input"}
            type="text"
            name="playersName"
            placeholder="Valentina"
          />
        </div>
        {error && <p className={ error && "form--error"}> {errorName} </p>}
        <button className="form__button" type="submit">
          Empezar Juego
        </button>
      </form>
    </>
  );
};
