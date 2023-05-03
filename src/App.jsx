import { useState } from "react";
import {
  useCards,
  useMemoryGame,
  useShowModal,
  useShowComponents,
  useForm,
} from "../src/hooks";
import { MemoryCards } from "./components/memory-cards/MemoryCards";
import { Form } from "./components/form/Form";
import { TopBanner } from "./components/top-banner/TopBanner";
import { ReloadPage } from "./components/reload-page/ReloadPage";
import { ModalInformation } from "./components/modal-information/ModalInformation";
import "./App.scss";

function App() {
  const [hits, setHits] = useState(0);
  const [errors, setErrors] = useState(0);
  const [cardNumber, setCardNumber] = useState(10);
  const [selectedCardFlip, setSelectedCardFlip] = useState(null);
  const [animating, setAnimating] = useState(false);

  const newGame = () => {
    setCards([]);
    setHits(0);
    setErrors(0);
    localStorage.setItem("cards", JSON.stringify([]));
    localStorage.setItem("scores", JSON.stringify({ hits: 0, errors: 0 }));
    localStorage.setItem("userName", null);

    setShowComponents({
      showForm: true,
      showBoard: false,
      showReload: false,
    });
  };

  const { cards, getCards, setCards } = useCards();
  const { onCardClick } = useMemoryGame({
    cards,
    hits,
    errors,
    setCards,
    selectedCardFlip,
    setSelectedCardFlip,
    setHits,
    setErrors,
    setAnimating,
  });
  const { showModal, handleClose } = useShowModal({
    hits,
    cardNumber,
    newGame,
  });
  const { showComponents, setShowComponents } = useShowComponents();
  const { userName, handleSubmitName, errorName, handleChange, setUserName, } = useForm({
    getCards,
    setShowComponents,
    cardNumber,
    cards,
  });

  const continueGame = () => {
    let cardsLS = JSON.parse(localStorage.getItem("cards"));
    let { hits, errors } = JSON.parse(localStorage.getItem("scores"));
    let userNameLS = localStorage.getItem("userName");
    setCards(cardsLS);
    setUserName( userNameLS )
    setHits(hits);
    setErrors(errors);
    setShowComponents({
      showForm: false,
      showBoard: true,
      showReload: false,
    });
  };

  window.onbeforeunload = function () {
    localStorage.setItem("reloadPage", true);
  };

  return (
    <>
      <div className="memorize">
        <TopBanner />
        <main className="memorize__content">
          <Form
            handleSubmitName={handleSubmitName}
            showForm={showComponents.showForm}
            errorName={errorName}
            handleChange={handleChange}
          />
          <ReloadPage
            continueGame={continueGame}
            newGame={newGame}
            showReload={showComponents.showReload}
          />
          <MemoryCards
            showBoard={showComponents.showBoard}
            userName={userName}
            hits={hits}
            errors={errors}
            animating={animating}
            cards={cards}
            onCardClick={onCardClick}
          />
        </main>
        <ModalInformation
          id={"staticBackdrop"}
          title={"Felicidades"}
          message={`Ganaste con ${hits} aciert(os) y ${errors} error(es) !`}
          handleClose={handleClose}
          show={showModal}
        />
      </div>
    </>
  );
}

export default App;
