import { Board } from "../board/Board";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import "./MemoryCards.scss";

export const MemoryCards = ({
  showBoard,
  userName,
  hits,
  errors,
  animating,
  cards,
  onCardClick,
}) => {
  return (
    <div className={showBoard ? "memory-cards--show" : "memory-cards--no-show"}>
      <div className="score">
        <p className="score__user"> Bienvenid@ {userName} </p>
        <div className="score__hits">
          <FaRegThumbsUp className="score__icon" />
          {hits < 2 ? `${hits} Acierto` : ` ${hits} Aciertos`}
        </div>
        <div className="score__errors">
          <FaRegThumbsDown className="score__icon" />
          {errors < 2 ? `${errors} Error` : ` ${errors} Errores`}
        </div>
      </div>
      <div className="wrap-board">
        <Board
          animating={animating}
          cards={cards}
          onCardClick={onCardClick}
        />
      </div>
    </div>
  );
};
