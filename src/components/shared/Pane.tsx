import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

interface Props {
  className?: string;
  size?: 'lg' | 'sm';
}

const Pane: FC<Props & PropsWithChildren> = ({
  className,
  children,
  size = 'lg',
}) => {
  return (
    <div
      className={cn('bg-white/[0.03]', className, {
        ['p-[50px] rounded-[20px] md:p-[50px_20px] md:ml-[-20px] md:mr-[-20px] md:border-b-[1px] md:border-accent-green md:rounded-none']:
          size === 'lg',
        ['p-[30px_15px] rounded-[5px] md:rounded-none md:ml-[-20px] md:mr-[-20px] md:bg-transparent']:
          size === 'sm',
      })}
    >
      {children}
    </div>
  );
};

export default Pane;
