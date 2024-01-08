import { DetailedHTMLProps, FC, TextareaHTMLAttributes, useRef } from 'react';
import useCopy from '../../hooks/useCopy';

interface Props {}

const CodeOutput: FC<
  Props &
    DetailedHTMLProps<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >
> = ({ value, ...props }) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const { copy, copied } = useCopy();

  return (
    <div className="rounded-[5px] flex flex-col bg-code-input-bg ">
      <div className="bg-code-output-header rounded-[5px] p-[5px_15px] flex justify-end">
        <span
          className="text-white text-[13px] font-[500] cursor-pointer"
          onClick={() => ref.current && copy(ref.current.value)}
        >
          {copied ? 'Copied!' : 'Copy to clipboard'}
        </span>
      </div>

      <textarea
        className="bg-code-input-bg min-h-[350px] rounded-[0_0_5px_5px] resize-y p-[15px] placeholder:text-white/50 text-white focus:border-accent-green border-[1px] border-transparent outline-none text-[15px] fira-code"
        value={value}
        {...props}
        ref={ref}
      ></textarea>
    </div>
  );
};

export default CodeOutput;
