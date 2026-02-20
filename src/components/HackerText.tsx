import { useState, useRef, useEffect, useCallback } from 'react';

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

interface HackerTextProps {
  text: string;
  className?: string;
  trigger?: 'hover' | 'load';
}

export default function HackerText({ 
  text, 
  className = "", 
  trigger = 'hover' 
}: HackerTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<number | undefined>(undefined);

  const triggerEffect = useCallback(() => {
    let iteration = 0;
    
    clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      setDisplayText(() => {
        return text
          .split("")
          .map((letter, index) => {
            if (letter === " ") return " ";
            
            if (index < iteration) {
              return text[index];
            }
            
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join("");
      });

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }
      
      iteration += 1 / 3; 
    }, 30);
  }, [text]);

  useEffect(() => {
    if (trigger === 'load') {
      triggerEffect();
    }
    
    return () => clearInterval(intervalRef.current);
  }, [trigger, triggerEffect]);

  return (
    <span 
      onMouseEnter={trigger === 'hover' ? triggerEffect : undefined} 
      className={`font-mono ${trigger === 'hover' ? 'cursor-pointer' : ''} ${className}`}
    >
      {displayText}
    </span>
  );
}