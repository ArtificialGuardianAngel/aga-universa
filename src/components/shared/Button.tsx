import cn from 'classnames';
import type { FC, HTMLProps } from 'react';

interface Props {
  type: 'primary' | 'secondary' | 'outline';
}

const Button: FC<Props & HTMLProps<HTMLButtonElement>> = ({
  children,
  className,
  type,
  ...props
}) => {
  return (
    <button
      className={cn(
        'uppercase transition-all sora disabled:cursor-not-allowed',
        className,
        {
          ['p-[10px_20px] rounded-[35px] bg-white/10 text-[12px] hover:bg-white/15 disabled:opacity-20 font-[700]']:
            type === 'secondary',
          ['p-[25px_30px] rounded-[50px] bg-accent-green text-blue-6 text-[13px] font-[600] hover:bg-[#9AF3E9] disabled:opacity-20']:
            type === 'primary',
          ['p-[20px_30px] rounded-[50px] bg-btn-outline-bg text-accent-green text-[13px] font-[600] border-2 border-accent-green hover:bg-accent-green/10']:
            type === 'outline',
        },
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
