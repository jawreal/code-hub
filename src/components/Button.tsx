import React, { memo } from 'react';

interface BUTTON_TYPE {
  onClick?: React.Dispatch<React.SetStateAction<boolean>> | (() => void); 
  className: string;
  text?: string;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
}


const Button = ({ onClick, className, text, icon, type }: BUTTON_TYPE) => {
  return (
      <button type={type ?? "button"} className={`cursor-pointer ${className}`} onClick={() => {
        if (onClick && typeof onClick === "function") {
          if (onClick.length === 1) {
            (onClick as React.Dispatch<React.SetStateAction<boolean>>)(false);
          } else {
            (onClick as () => void)();
          }
        }
      }
      }>
      {icon && <span>{icon}</span>}
      {text && <span>{text}</span>}
      </button>
    );
};

export default memo(Button);