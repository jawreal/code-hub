import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

const MarkdownEditor = () => {
  const [value, setValue] = useState<string>('**Hello Markdown!**');
  const handleChange = (value?: string) => {
    if (value !== undefined) {
      setValue(value);
    }
  };

  return (
    <div className="w-full h-[25rem] md:h-[40rem]">
      <MDEditor
        value={value} 
        preview="edit" 
        height="100%" 
        onChange={handleChange} 
      />
    </div>
  );
};

export default MarkdownEditor;