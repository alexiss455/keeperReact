import React, { useRef, useState, useEffect } from "react";
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
  const [expnad, setExpand] = useState(true);
  function maxheight() {
    setExpand(false);
  }
  return (
    <div className="containers">
      <form onSubmit={handleAddCard}>
        <div className="input_container">
          {expnad === false ? (
            <input
              placeholder="Title"
              name="title"
              onChange={changeNotes}
              value={note.title}
              required
            />
          ) : null}
          <textarea
            onClick={maxheight}
            className="notes"
            placeholder="Take a note"
            name="content"
            onChange={changeNotes}
            value={note.content}
            rows={expnad === false ? 5 : 0}
            required
          />
          <button className="btn" type="submit">
            +
          </button>
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
