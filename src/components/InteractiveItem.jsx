// InteractiveItem.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveItem = ({ item, animation, quote }) => {
  const [showQuote, setShowQuote] = useState(false);

  const handleClick = () => {
    setShowQuote(!showQuote);
  };

  return (
    <motion.div
      className="interactive-item"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
    >
      {animation}
      {showQuote && <div className="quote">{quote}</div>}
    </motion.div>
  );
};

export default InteractiveItem;
