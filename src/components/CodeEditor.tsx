import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { materialDark } from '@uiw/codemirror-theme-material';
import useDarkMode from "../hooks/useDarkMode";



const CodeEditor = () => {
   const [darkMode] = useDarkMode();
   return (
   <div className="rounded-xl overflow-hidden w-full border border-zinc-300 dark:border-zinc-900 max-w-[40rem]">
      <CodeMirror
        value="//your code here"
        height="25rem"
        extensions={[javascript()]}
        theme={materialDark}
      />
    </div>
    );
};


export default CodeEditor;