import type { FC, PropsWithChildren } from 'react';

const TitlePane: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="p-[15px_30px] rounded-[5px] bg-white/5 text-center text-[18px] font-[700]">
      {children}
    </div>
  );
};

export default TitlePane;
