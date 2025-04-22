import { memo } from 'react';
import CodehubLogo from '../assets/CodehubLogo.png';
import Image from './Image'

const LogoHeader = ({ page }: { page: boolean; }) => {
  return (
    <>
      <div className="w-9 h-9">
        <Image url={CodehubLogo} className="h-full w-full" />
      </div>
      {page && <span className={`dark:text-zinc-200 font-extrabold text-xl md:text-2xl ${page ? "inline" : "hidden md:inline"}`} >CodeHub</span>}
    </>
    );
};

export default memo(LogoHeader);