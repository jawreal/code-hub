import React, { memo } from 'react';
import Button from './Button';
import { Eye } from 'lucide-react';

interface INPUTBOX_TYPE {
  placeholder: string;
  icon?: React.ReactNode;
  type?: string;
};

const Inputbox = ({ placeholder, icon, type }: INPUTBOX_TYPE) => {
  const attributes: Partial<React.InputHTMLAttributes<HTMLInputElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>> = {
    className: `dark:bg-zinc-900 bg-gray-100 border border-gray-300 text-gray-700 focus:ring-1 border-zinc-300 dark:border-zinc-600 focus:ring-emerald-500 dark:focus:ring-emerald-600 outline-none focus:border-none w-full p-2 rounded-md ${icon ? "pl-11" : ""} mb-0 dark:text-zinc-200`, 
    placeholder: placeholder ?? "", 
  }
  
  return (
    <div className="relative w-full">
      {type === "textarea" ? (
        <textarea {...attributes} rows={4} />
      ) : (
        <input {...attributes} type={type?? "text"} />
      )}
       {icon && <span className="absolute left-0 pt-2 pl-3">{icon}</span>}
       <Button className={`${type === "password" ? "block" : "hidden"} absolute right-0 bottom-0 pb-2 pr-2`} icon={<Eye className="w-6 h-6 dark:text-zinc-600 text-zinc-400" />} />
    </div>
    );
};

export default memo(Inputbox);