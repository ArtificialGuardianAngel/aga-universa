import type { FC, InputHTMLAttributes, DetailedHTMLProps } from 'react';
import cn from 'classnames';
import tipIcon from '../../assets/icons/i.svg';

interface Props {
  label?: string;
  tip?: string;
}

const Input: FC<
  Props &
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ className, label, tip, ...props }) => {
  return (
    <div className={cn('flex flex-col gap-[15px]', className)}>
      <div className="flex items-center gap-[10px]">
        {label && (
          <label className="flex-1 font-bold text-blue-5 leading-[calc(10/15)] md:text-[14px]">
            {label}
          </label>
        )}

        {tip && (
          <div className="md:block hidden">
            <div className="w-[25px] h-[25px] bg-white/10 rounded-full flex items-center justify-center cursor-pointer relative group tip-trigger z-10">
              <img src={tipIcon} />

              <div className="hidden absolute p-[20px] rounded-[5px] w-[260px] left-[-20px] translate-x-[-100%] bg-white/[0.03] group-hover:block text-[13px] font-[500] leading-[15px] top-0 backdrop-blur-[50px]">
                {tip}
              </div>
            </div>

            <div className="tip-overlay"></div>
          </div>
        )}
      </div>
      <div className="flex gap-[15px] items-center">
        <input
          className="p-[20px] rounded-[5px] bg-white/[0.07] text-[15px] h-[50px] outline-none focus:border-accent-green border-[1px] border-transparent text-blue-5 flex-1"
          {...props}
        />

        {tip && (
          <div className="md:hidden">
            <div className="w-[25px] h-[25px] bg-white/10 rounded-full flex items-center justify-center cursor-pointer relative group tip-trigger z-10">
              <img src={tipIcon} />

              <div className="hidden absolute p-[20px] rounded-[5px] w-[260px] left-[-20px] translate-x-[-100%] bg-white/[0.03] group-hover:block text-[13px] font-[500] leading-[15px] top-0 backdrop-blur-[50px]">
                {tip}
              </div>
            </div>

            <div className="tip-overlay"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
