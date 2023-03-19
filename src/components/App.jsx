import React, { useState } from "react";
import "./App.css";
import Cards from "../assets/cards";


function App() {
  // handle Click button with storage of an title and notes
  const [cards, setCards] = useState([]);

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  function changeTitle(event) {
    setTitle(event.target.value);
  }
  function changeNotes(event) {
    setNote(event.target.value);
  }

  function handleAddCard(event) {
    event.preventDefault();
    const newCard = { title: title, note: note };
    setCards([...cards, newCard]);
    setTitle("");
    setNote("");
  }

  function delcards(id) {
    setCards((prevCards) => {
      return prevCards.filter((item, index) => {
        console.log(index);
        return index !== id;
      });
    });
  }
  return (
    <div className="containers">
      <form onSubmit={handleAddCard}>
        <div className="input_container">
          <input
            placeholder="Title"
            onChange={changeTitle}
            value={title}
            required
          />
          <textarea
            className="notes"
            placeholder="Take a note"
            onChange={changeNotes}
            value={note}
            required
          />
          <button type="submit">add</button>
        </div>
      </form>
      <div className="textContainer">
        {cards.map((card, index) => (
          <Cards
            key={index}
            id={index}
            title={card.title}
            description={card.note}
            deleteCards={delcards}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
