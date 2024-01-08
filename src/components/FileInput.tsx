import { DetailedHTMLProps, FC, InputHTMLAttributes, useRef } from 'react';

interface Props {
  label?: string;
}

const FileInput: FC<
  Props &
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ label, ...props }) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="p-[70px_50px] border-2 border-dashed border-white/30 rounded-[5px] flex flex-col gap-[30px] items-center md:p-[50px_20px]">
      <div className="text-[15px] font-[500] md:text-center">{label}</div>

      <label className="p-[20px] rounded-[5px] bg-white/10 cursor-pointer md:w-full">
        <span className="border-b-2 border-blue-5">Upload</span> or drop your
        files here
        <input ref={ref} className="hidden" type="file" {...props} />
      </label>
    </div>
  );
};

export default FileInput;
