export function useMemoryGame({
  cards,
  hits,
  errors,
  setCards,
  selectedCardFlip,
  setSelectedCardFlip,
  setHits,
  setErrors,
  setAnimating,
}) {
  const updateScore = (hits, errors) => {
    localStorage.setItem("scores", JSON.stringify({ hits, errors }));
  };
  const updateCards = (cards) => {
    localStorage.setItem("cards", JSON.stringify(cards));
  };

  const onCardClick = ({ card }) => {
    // update the clicked card to flipped state
    const flippedCards = { ...card, flipped: true };
    let cardsCopy = [...cards];
    cardsCopy.splice(card.id, 1, flippedCards);
    setCards(cardsCopy);

    // check if there is a selected card already flipped or not
    if (selectedCardFlip === null) {
      // if not, save the current card as flipped card
      setSelectedCardFlip(card);
    } else if (selectedCardFlip.title === card.title) {
      // if yes and the two selected card have the same title, increment hits and reset the flipped card state
      setHits((prev) => prev + 1);
      setSelectedCardFlip(null);
      updateCards(cardsCopy);
      updateScore(hits + 1, errors);
    } else {
      // if yes and the two selected cards are not the same, wait for 1s and reset the flipped cards and show the front side of the cards
      setAnimating(true);
      setErrors((prev) => prev + 1);
      updateScore(hits, errors + 1);
      setTimeout(() => {
        cardsCopy.splice(card.id, 1, card);
        cardsCopy.splice(selectedCardFlip.id, 1, selectedCardFlip);
        updateCards(cardsCopy);
        setCards(cardsCopy);
        setSelectedCardFlip(null);
        setAnimating(false);
      }, 1000);
    }
  };

  return {
    onCardClick,
  };
}
