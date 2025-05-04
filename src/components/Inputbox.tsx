import { memo, KeyboardEvent, ChangeEvent, RefObject } from 'react';
import Button from './Button';
import { Eye } from 'lucide-react';

interface INPUTBOX_TYPE {
  placeholder: string;
  icon?: React.ReactNode;
  type?: string;
  isTransparent?: boolean;
  value?: string;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  ref?: RefObject<HTMLInputElement | HTMLTextAreaElement | null>;
};

const Inputbox = ({ placeholder, icon, type, isTransparent, value, onKeyDown, onChange, ref }: INPUTBOX_TYPE) => {
  const attributes: Partial<React.InputHTMLAttributes<HTMLInputElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>> = {
    className: `${isTransparent ? `border-none outline-none bg-transparent py-2 text-zinc-700 dark:text-zinc-200 flex-grow` : `dark:bg-zinc-900 bg-gray-100 border border-zinc-300 text-zinc-700 focus:ring-1 border-zinc-300 dark:border-zinc-800 focus:ring-emerald-500 focus:border-none dark:focus:ring-emerald-600 outline-none focus:border-none w-full p-2 rounded-md ${icon ? "pl-11" : ""} mb-0 dark:text-zinc-200`}`, 
    placeholder: placeholder ?? "",
    value: value ?? "", 
    onKeyDown: onKeyDown ?? ((_: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {}), 
    onChange: onChange ?? ((_: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {}), 
  }
  
  return (
    <div className={`relative ${isTransparent ? "flex-grow max-w-32" : "w-full"}`}>
      {type === "textarea" ? (
        <textarea {...attributes} rows={4} />
      ) : (
        <input ref={ref as RefObject<HTMLInputElement> | undefined} {...attributes} type={type ?? "text"} />
      )}
       {icon && <span className="absolute left-0 pt-2 pl-3">{icon}</span>}
       <Button className={`${type === "password" ? "block" : "hidden"} absolute right-0 bottom-0 pb-2 pr-2`} icon={<Eye className="w-6 h-6 dark:text-zinc-600 text-zinc-400" />} />
    </div>
    );
};

export default memo(Inputbox);