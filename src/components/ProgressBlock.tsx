import { useContext } from 'react';
import cn from 'classnames';

import StageContext from '../context/StageContext';

const STAGES = [
  '1. Agent Creation',
  '2. Test the Agent',
  '3. Deploy the Agent',
  '4. Agent Credentials',
];

const ProgressBlock = () => {
  const { stage, prevStage } = useContext(StageContext);

  return (
    <div className="fixed bottom-0 left-0 w-full p-[30px] bg-white/[0.03] backdrop-blur-[50px] shadow-[0px_-10px_50px_0px_rgba(34,48,77,0.70)]">
      <div className="flex gap-[15px] items-center">
        <button
          className="w-[35px] h-[35px] rounded-full border-none bg-accent-green disabled:opacity-20 flex items-center justify-center"
          disabled={stage === 0}
          onClick={() => prevStage()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="13"
            viewBox="0 0 7 13"
            fill="none"
          >
            <path
              d="M5.83008 1.88956L1.17008 6.54956L5.83008 11.1104"
              stroke="#3D4B72"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="flex gap-[2px] flex-1 md:hidden">
          <div
            className={cn('flex flex-col gap-[15px] flex-1 transition-all', {
              'opacity-20': stage < 0,
            })}
          >
            <div className="font-[600] text-[13px]">1. Agent Creation</div>
            <div className="h-[10px] bg-accent-green rounded-[30px_0_0_30px]"></div>
          </div>

          <div
            className={cn('flex flex-col gap-[15px] flex-1 transition-all', {
              'opacity-20': stage < 1,
            })}
          >
            <div className="font-[600] text-[13px]">2. Test the Agent</div>
            <div className="h-[10px] bg-accent-green"></div>
          </div>

          <div
            className={cn('flex flex-col gap-[15px] flex-1 transition-all', {
              'opacity-20': stage < 2,
            })}
          >
            <div className="font-[600] text-[13px] transition-all">
              3. Deploy the Agent
            </div>
            <div className="h-[10px] bg-accent-green"></div>
          </div>

          <div
            className={cn('flex flex-col gap-[15px] flex-1', {
              'opacity-20': stage < 3,
            })}
          >
            <div className="font-[600] text-[13px] transition-all">
              4. Agent Credentials
            </div>
            <div className="h-[10px] bg-accent-green rounded-[0_30px_30px_0]"></div>
          </div>
        </div>
        <div className="hidden md:flex flex-col gap-[15px] flex-1">
          <div className="text-accent-green text-[13px] font-[600]">
            {STAGES[stage]}
          </div>

          <div className="flex gap-[2px]">
            <div
              className={cn(
                'h-[10px] rounded-[30px_0_0_30px] flex-1 bg-accent-green',
                { 'opacity-20': stage < 0 },
              )}
            ></div>
            <div
              className={cn('h-[10px] flex-1 bg-accent-green', {
                'opacity-20': stage < 1,
              })}
            ></div>
            <div
              className={cn('h-[10px] flex-1 bg-accent-green', {
                'opacity-20': stage < 2,
              })}
            ></div>
            <div
              className={cn(
                'h-[10px] rounded-[0_30px_30px_0] flex-1 bg-accent-green',
                { 'opacity-20': stage < 3 },
              )}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBlock;
