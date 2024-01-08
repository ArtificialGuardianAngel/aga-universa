import cn from 'classnames';

import type { FC } from 'react';

interface Props {
  value: boolean;
  setValue: (value: boolean) => void;
}

const Switch: FC<Props> = ({ setValue, value }) => {
  return (
    <div
      className="w-[40px] h-[20px] rounded-[50px] bg-white/10 border-[1.5px] border-blue-4 p-[4px] relative cursor-pointer"
      onClick={() => setValue(!value)}
    >
      <div
        className={cn(
          'absolute w-[12px] h-[12px] bg-blue-4 rounded-full top-[50%] translate-y-[-50%] transition-all',
          {
            'left-[4px]': !value,
            'left-[calc(100%-16px)]': value,
          },
        )}
      ></div>
    </div>
  );
};

export default Switch;
