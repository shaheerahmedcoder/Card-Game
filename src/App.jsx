import { useState, useEffect } from "react";
import "./index.css"; 

const cardData = [
  { image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVBeUc4qOt8KPhuQqPM3a2fF-KuX7AP9eu1-nv1dNTijPaTT72sqUu9c-MBURiWpt14Dg&usqp=CAU", user_id: 1 },
  { image_url: "https://i.ebayimg.com/images/g/ercAAOSwpOxmfJVL/s-l400.jpg", user_id: 2 },
  { image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrwClS4jNDjSYCUgXhNp5aEG-DceDU5kdVyoA7BVe70NZdjzLvBuL08vG6QWWP01ofIM&usqp=CAU", user_id: 3 },
  { image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGjXMkhgvycpNSR3pewM8t3S0OAJdqMCdckR4PShYx9RUUC13YKorCoyc0XIt7dhp4iY&usqp=CAU", user_id: 4 },
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
