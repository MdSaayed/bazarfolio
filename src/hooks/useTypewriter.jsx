import { span } from 'framer-motion/client';
import { useState, useEffect, useRef } from 'react';

const useTypewriter = (words, options = {}) => {
  const {
    loop = true,
    typeSpeed = 150,  // Slower default typing speed
    deleteSpeed = 50,
    delaySpeed = 1500,  // Longer pause between words
    cursor = true,
    cursorStyle = '',
    cursorColor = 'currentColor',
    cursorWidth = '1px',
    cursorHeight = '0.8em'
  } = options;

  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timerRef = useRef(null);

  // Calculate typing speed dynamically for smoother effect
  const getTypingSpeed = () => {
    const baseSpeed = isDeleting ? deleteSpeed : typeSpeed;
    const currentWord = words[currentIndex % words.length];
    const progress = text.length / currentWord.length;
    
    // Slow down at start and end of typing
    return baseSpeed * (0.7 + Math.sin(progress * Math.PI) * 0.3);
  };

// Inside your useTypewriter hook (just the relevant part)
useEffect(() => {
    const typeCharacter = () => {
      const currentWord = words[currentIndex % words.length];
      
      if (!isDeleting) {
        // Typing forward
        setText(currentWord.substring(0, text.length + 1));
        
        // When word is complete
        if (text === currentWord) {
          timerRef.current = setTimeout(() => setIsDeleting(true), 1000); // 1 second delay here
          return;
        }
      } else {
        // Deleting backward
        setText(currentWord.substring(0, text.length - 1));
        
        // When word is deleted
        if (text === '') {
          setIsDeleting(false);
          setCurrentIndex(loop ? currentIndex + 1 : currentIndex);
          timerRef.current = setTimeout(typeCharacter, 500); // Short pause before next word
          return;
        }
      }
      
      timerRef.current = setTimeout(typeCharacter, getTypingSpeed());
    };
  
    timerRef.current = setTimeout(typeCharacter, isDeleting ? deleteSpeed : typeSpeed);
    
    return () => clearTimeout(timerRef.current);
  }, [text, currentIndex, isDeleting, words, loop, delaySpeed]);

  // Single cursor component
  const Cursor = () => (
    <span style={{
      display: 'inline-block',
      width: cursorWidth,
      height: cursorHeight,
      backgroundColor: cursorColor,
      marginLeft: '10px',
      animation: 'blink 1s step-end infinite'
    }}>
      {cursorStyle}
    </span>
  );
  

  return {
    text,
    cursor: cursor ? <Cursor /> : null
  };
};

export default useTypewriter;