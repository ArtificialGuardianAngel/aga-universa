import { useContext, useEffect } from 'react';
import Button from './shared/Button';
import CodeOutput from './shared/CodeOutput';
import Pane from './shared/Pane';
import StageContext from '../context/StageContext';

const ThirdStage = () => {
  const { nextStage } = useContext(StageContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col gap-[50px] container md:gap-0">
      <Pane className="flex flex-col gap-[50px]">
        <div className="rounded-[20px] bg-white/[0.07] p-[70px] backdrop-blur-[50px] flex flex-col gap-[35px] sora items-center md:p-[70px_20px]">
          <div className="p-[15px_20px] rounded-[50px] border-blue-5 border-2">
            Step 3: Deploy the Agent
          </div>
          <p className="text-[15px] font-[500] text-center">
            Bring your Agent to life on the server of your choice.
          </p>
        </div>

        <div className="flex flex-col gap-[30px]">
          <Pane size="sm">
            <div className="flex flex-col gap-[15px]">
              <div className="flex gap-[15px]">
                <h5 className="flex-1 text-[13px] font-bold uppercase">
                  Deploy server details:
                </h5>
              </div>
              <CodeOutput />
            </div>
          </Pane>
        </div>
      </Pane>

      <Button
        className="self-center md:self-stretch md:mt-[50px]"
        type="primary"
        onClick={() => nextStage()}
      >
        Deploy now
      </Button>
    </div>
  );
};

export default ThirdStage;
