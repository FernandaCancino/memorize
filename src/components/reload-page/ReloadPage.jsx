import { Constants } from "../../utils/Constants";
import "./ReloadPage.scss"

export const ReloadPage = ({ continueGame, newGame, showReload }) => {
  return (
    <div className={ showReload ? "reload reload--show" : "reload reload--no-show"}>
      <h2>  { Constants.RELOAD_PAGE } </h2>
      <button className="reload__button" onClick={continueGame}>
        { Constants.CONTINUE_GAME }
      </button>
      <button className="reload__button" onClick={newGame}>
        { Constants.NEW_GAME }
      </button>
    </div>
  );
};
