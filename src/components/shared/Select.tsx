import React, { useRef, useState } from 'react';
import cn from 'classnames';
import { useOnClickOutside } from 'usehooks-ts';
import tipIcon from '../../assets/icons/i.svg';

const LETTERS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

interface Props {
  placeholder: string;
  options: string[] | readonly string[];
  className?: string;
  tip?: string;
  label?: string;
}

interface SingleProps {
  value?: string;
  onChange?: (value: string) => void;
  multiple: false;
}

interface MultipleProps {
  value?: string[];
  onChange?: (value: string[]) => void;
  multiple: true;
}

const Select: React.FC<(Props & SingleProps) | (Props & MultipleProps)> = ({
  placeholder,
  options,
  value,
  onChange,
  className,
  tip,
  label,
  multiple,
}) => {
  const [opened, setOpened] = useState(false);
  const ref = useRef(null);
  const childElementsRefs = useRef<HTMLDivElement[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const openDropdown = () => {
    setOpened(true);
  };

  const closeDropdown = () => {
    setOpened(false);
  };

  const toggleDropdown = () => {
    if (opened) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };

  const onSelect = (val: string) => {
    if (multiple) {
      if (!onChange) {
        return;
      }

      if (!value) {
        onChange([val]);
        return;
      }

      if (value.includes(val)) {
        onChange(value.filter((item) => item !== val));
        return;
      }

      onChange([...value, val]);
      return;
    } else {
      onChange && onChange(val);
    }

    closeDropdown();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (opened && LETTERS.includes(e.key)) {
      e.preventDefault();
      const found = childElementsRefs.current.find(
        (el) => el?.textContent?.toLowerCase().startsWith(e.key),
      );

      if (found && dropdownRef.current) {
        dropdownRef.current.scroll(0, found.offsetTop);
      }
    }
  };

  useOnClickOutside(ref, closeDropdown);

  return (
    <div className="flex flex-col gap-[15px]">
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
        <div className={cn('relative flex-1', className)} ref={ref}>
          <div
            className="p-[19px_20px] text-[rgba(255,255,255,0.5)] bg-white/[0.07] rounded-[4px] text-[16px] leading-[calc(12/16)] outline-none font-[500] flex justify-between items-center cursor-pointer"
            onClick={toggleDropdown}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <span
              className={cn('flex-1 text-[15px]', {
                ['text-[#D6E1FA]']: value,
              })}
            >
              {(multiple ? value?.join(', ') : value) || (
                <span className="text-blue-5/50">{placeholder}</span>
              )}
            </span>
            <svg
              className={cn('transition-all', { ['rotate-180']: opened })}
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M11 1.07617L5.94624 6.12994L1 1.07617"
                stroke="white"
                strokeOpacity="0.5"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {opened && (
            <div
              className="absolute bottom-[-5px] translate-y-[100%] rounded-[5px] w-[100%] p-[15px_25px] flex flex-col gap-[15px] bg-white/[0.03] max-h-[340px] overflow-y-scroll z-20 backdrop-blur-[25px] text-[15px]"
              ref={dropdownRef}
            >
              {options.map((val, idx) => (
                <>
                  <div
                    key={val}
                    ref={(el) => {
                      if (el) {
                        childElementsRefs.current[idx] = el;
                      }
                    }}
                    className={cn('cursor-pointer', {
                      'text-accent-green': multiple
                        ? value?.includes(val)
                        : value === val,
                    })}
                    onClick={() => onSelect(val)}
                  >
                    {val}
                  </div>
                  {idx !== options.length - 1 && (
                    <div className="h-[1px] bg-white/10"></div>
                  )}
                </>
              ))}
            </div>
          )}
        </div>

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

export default Select;
