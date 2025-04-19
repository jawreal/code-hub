import React, { useState, useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';

const MarkdownEditor = () => {
  const [value, setValue] = useState<string>('**Hello Markdown!**');

  return (
    <div className="w-full h-[25rem] md:h-[40rem]">
      <MDEditor
        value={value} 
        preview="edit" 
        height="100%" 
        onChange={setValue} 
      />
    </div>
  );
};

export default MarkdownEditor;