import { memo } from 'react';

const Spinner = ({ size }: { size: string }) => {
  return (
    <>
      <div className={`${size} border-4 border-emerald-500 border-t-transparent rounded-full animate-spin`}></div>
    </>
  );
};

export default memo(Spinner);
