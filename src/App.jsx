import { useState, useEffect } from "react";
import "./index.css"; 

const cardData = [
  { image_url: "image 1 dbz.jpg", user_id: 1 },
  { image_url: "image 2 dbz.jpg", user_id: 2 },
  { image_url: "image 3 dbz.jpg", user_id: 3 },
  { image_url: "image 4 dbz.jpg", user_id: 4 },
];

function CardGame() {
  const [currentUserId, setCurrentUserId] = useState(null);
  const [message, setMessage] = useState("");

 
  useEffect(() => {
    setCurrentUserId(Math.floor(Math.random() * cardData.length) + 1);
  }, []);

  const handleClick = (userId) => {
    if (userId === currentUserId) {
      setMessage("You Win!");
    } else {
      setMessage("You Lose! Try Again.");
    }
  };

 
  const shuffleUser = () => {
    setCurrentUserId(Math.floor(Math.random() * cardData.length) + 1);
    setMessage(""); 
  };

  return (
    <>
    <h1 className="container1">Card Game</h1>
    <div className="container">
      <h2>Click an Image</h2>
      <div className="card-container">
        {cardData.map((card, index) => (
          <img
            key={index}
            src={card.image_url}
            alt={`Card ${index}`}
            className="card-image"
            onClick={() => handleClick(card.user_id)}
          />
        ))}
      </div>
      <div className="result-container">
        {message && <h3>{message}</h3>}
        <button className="shuffle-button" onClick={shuffleUser}>
          Shuffle User Choice
        </button>
      </div>
    </div>
    </>);
}

export default CardGame;
