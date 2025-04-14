import { span } from 'framer-motion/client';
import { useState, useEffect, useRef } from 'react';

const useTypewriter = (words, options = {}) => {
  const {
    loop = true,
    typeSpeed = 150, 
    deleteSpeed = 100,
    delaySpeed = 1500,
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

  const getTypingSpeed = () => {
    const baseSpeed = isDeleting ? deleteSpeed : typeSpeed;
    const currentWord = words[currentIndex % words.length];
    const progress = text.length / currentWord.length;
    
    return baseSpeed * (0.7 + Math.sin(progress * Math.PI) * 0.3);
  };

useEffect(() => {
    const typeCharacter = () => {
      const currentWord = words[currentIndex % words.length];
      
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        
        if (text === currentWord) {
          timerRef.current = setTimeout(() => setIsDeleting(true), 2000); 
          return;
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        
        if (text === '') {
          setIsDeleting(false);
          setCurrentIndex(loop ? currentIndex + 1 : currentIndex);
          timerRef.current = setTimeout(typeCharacter, 500);
          return;
        }
      }
      
      timerRef.current = setTimeout(typeCharacter, getTypingSpeed());
    };
  
    timerRef.current = setTimeout(typeCharacter, isDeleting ? deleteSpeed : typeSpeed);
    
    return () => clearTimeout(timerRef.current);
  }, [text, currentIndex, isDeleting, words, loop, delaySpeed]);

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