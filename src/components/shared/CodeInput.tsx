import type { FC } from 'react';
import tipIcon from '../../assets/icons/i.svg';

interface Props {
  label?: string;
  tip?: string;
  placeholder?: string;
  readonly?: boolean;
}

const CodeInput: FC<Props> = ({ label, tip, placeholder, readonly }) => {
  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex gap-[15px]">
        <h5 className="flex-1 text-[13px] font-bold uppercase">{label}</h5>

        {tip && (
          <div className="w-[25px] h-[25px] bg-white/10 rounded-full flex items-center justify-center cursor-pointer relative group">
            <img src={tipIcon} />

            <div className="hidden absolute p-[20px] rounded-[5px] w-[260px] left-[-20px] translate-x-[-100%] bg-white/[0.03] group-hover:block text-[13px] font-[500] leading-[15px] top-0">
              {tip}
            </div>
          </div>
        )}
      </div>

      <textarea
        className="bg-code-input-bg rounded-[5px] min-h-[350px] resize-y p-[15px] placeholder:text-white/50 text-white focus:border-accent-green border-[1px] border-transparent outline-none text-[15px] fira-code"
        placeholder={placeholder}
        readOnly={readonly}
      ></textarea>
    </div>
  );
};

export default CodeInput;
