import React, { memo } from 'react';

interface BUTTON_TYPE {
  onClick?: React.Dispatch<React.SetStateAction<boolean>> | (() => void); // Handles both cases
  className: string;
  text?: string;
  icon?: React.ReactNode;
}


const Button = ({ onClick, className, text, icon  }: BUTTON_TYPE) => {
  return (
      <button className={className} onClick={() => {
        if (onClick && typeof onClick === "function") {
          // If onClick is a state setter (setProf), call it with false
          if (onClick.length === 1) {
            (onClick as React.Dispatch<React.SetStateAction<boolean>>)(false);
          } else {
            // If onClick is an arrow function (() => setProf(false)), just call it
            (onClick as () => void)();
          }
        }
      }
      }>
      {icon && <span>{icon}</span>}
      {text && <label id={text}>{text}</label>}
      </button>
    );
};

export default memo(Button);