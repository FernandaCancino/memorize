import { Momentum } from "@uiball/loaders";
import { CardBlock } from "../card/CardBlock";
import "./Board.scss";

export const RenderCards = ({ animating, onCardClick, cards }) => {
  return (
    <>
      <div className="board">
        {cards.map((card, index) => (
          <CardBlock
            card={card}
            key={index}
            animating={animating}
            onCardClick={onCardClick}
          />
        ))}
      </div>
    </>
  );
};

export const NoRenderCards = () => {
  return (
    <div className="board--no-render">
      <Momentum size={60} speed={1.1} color="currentColor" />
    </div>
  );
};

export const Board = ({ animating, onCardClick, cards }) => {
  const hasCards = cards?.length > 0;
  return hasCards ? (
    <RenderCards
      animating={animating}
      onCardClick={onCardClick}
      cards={cards}
    />
  ) : (
    <NoRenderCards />
  );
};
