import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

const MarkdownEditor = () => {
  const [value, setValue] = useState<string>('**Hello Markdown!**');

  return (
    <div className="w-full h-[25rem] md:h-[40rem]">
      <MDEditor value={value} preview="edit" height="100%" onChange={setValue} />
    </div>
  );
};

export default MarkdownEditor;