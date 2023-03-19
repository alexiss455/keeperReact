import React, { useState } from "react";
import "./App.css";
import Cards from "../assets/cards";

function App() {
  // handle Click button with storage of an title and notes
  const [cards, setCards] = useState([]);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function changeNotes(event) {
    const { name, value } = event.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }
  function handleAddCard(event) {
    event.preventDefault();
    const newCard = { title: note.title, content: note.content };
    setCards([...cards, newCard]);
    setNote({ title: "", content: "" });
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
            name="title"
            onChange={changeNotes}
            value={note.title}
            required
          />
          <textarea
            className="notes"
            placeholder="Take a note"
            name="content"
            onChange={changeNotes}
            value={note.content}
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
            description={card.content}
            deleteCards={delcards}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
