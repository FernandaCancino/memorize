import { useState } from "react";
import { searchCards } from "../services/cards";

export function useCards() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);

  const getCards = async ({ cardNumber }) => {
    try {
      const newCards = await searchCards({ cardNumber });
      setCards(getShuffleCards(newCards));
    } catch (error) {
      setError(error.message);
    }
  };

  const getShuffleCards = (cards) => {
    if (cards?.length < 1) return;
    const clonedCards = [...cards, ...cards];
    return clonedCards
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index, flipped: false }));
  };

  return { cards, getCards, setCards };
}
