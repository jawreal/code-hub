import { memo } from 'react';
import CodehubLogo from '../assets/CodehubLogo.png';
import Image from './Image'

const LogoHeader = ({ page }: { page: boolean; }) => {
  return (
    <>
      <div className="w-10 h-10">
        <Image url={CodehubLogo} className="h-full w-full" />
      </div>
      {page && <label className={`dark:text-zinc-200 font-extrabold text-xl md:text-2xl ${page ? "inline" : "hidden md:inline"}`} >CodeHub</label>}
    </>
    );
};

export default memo(LogoHeader);