import React, { memo, useCallback, useRef } from 'react';

interface BUTTON_TYPE {
  onClick?: React.Dispatch<React.SetStateAction<boolean>> | (() => void); 
  className: string;
  text?: string;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
}


const Button = ({ onClick, className, text, icon, type }: BUTTON_TYPE) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const handleClick = useCallback(() => {
    if (timeoutRef.current){
      //already waiting 
      return;
    }
    if (onClick && typeof onClick === "function") {
         if (onClick.length === 1) {
           (onClick as React.Dispatch<React.SetStateAction<boolean>>)(false);
        } else {
           (onClick as () => void)();
        }
    }
      
    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null; // Reset after 500ms
    }, 100);
  }, [onClick])
  return (
      <button type={type ?? "button"} className={`cursor-pointer ${className}`} onClick={handleClick}>
      {icon && <span>{icon}</span>}
      {text && <span>{text}</span>}
      </button>
    );
};

export default memo(Button);