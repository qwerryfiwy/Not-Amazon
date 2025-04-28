import React, { useState } from 'react';
import './styles/registry.css';

const Registry = () => {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [jokeMessage, setJokeMessage] = useState('');

  const handleAddToRegistry = () => {
    const randomJoke = [
      "Registry not allowed. The Cyber Police has captured our Registry Handling!",
      "Your item has been magically summoned to the cart, but it's now on sale for 50% more!",
      "Oops! The item disappeared into a black hole. Try again later... maybe.",
      "Registry functionality is currently in the hands of our mystical wizard. No promises!",
      "Registry denied. The Cyber Police has intercepted your request. Enjoy your empty cart.",
      "Adding items to the registry is like trying to find your soul in a void. Its gone.",
      "This registry doesnt exist. Much like your hope in this system.",
      "Registry function? Thats just a myth to keep you distracted. Enjoy your broken dreams.",
      "Sorry, the registry is currently on fire. We recommend backing away slowly and never looking back.",
      "You're trying to add an item to the registry. How cute. Let us remind you: Nothing ever goes as planned here.",
      "The Cyber Police are having a good laugh right now. Your registry? Its just a list of empty promises."
    ];
    const randomIndex = Math.floor(Math.random() * randomJoke.length);
    setJokeMessage(randomJoke[randomIndex]);
  };

  return (
    <div className="registry">
      <h2>NotAmazon Registry</h2>

      <div className="registry-form">
        <label>
          Add Item to Registry:
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="What magical item do you need?"
          />
        </label>

        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            max="100"
          />
        </label>

        <button onClick={handleAddToRegistry}>Add to Registry</button>
      </div>

      {jokeMessage && <div className="joke-message">{jokeMessage}</div>}
    </div>
  );
};

export default Registry;
