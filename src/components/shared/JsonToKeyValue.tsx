import cn from 'classnames';

import type { FC } from 'react';

interface Props {
  data: object;
  dividers?: boolean;
}

const JsonToKeyValue: FC<Props> = ({ data, dividers }) => {
  return (
    <div
      className={cn('flex flex-col fira-code', {
        'gap-[5px]': !dividers,
        'gap-[15px]': dividers,
      })}
    >
      {Object.entries(data).map(([key, value], index) => (
        <>
          <div className="flex gap-[5px] text-[15px]" key={index}>
            <span className="">{key}:</span>
            <span className="text-accent-green">
              {JSON.stringify(value, null, 2)}
            </span>
          </div>
          {dividers && index !== Object.keys(data).length - 1 && (
            <div className="h-[1px] w-full bg-white/5"></div>
          )}
        </>
      ))}
    </div>
  );
};

export default JsonToKeyValue;
