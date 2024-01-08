import { useContext, useEffect } from 'react';
import Chat from './Chat';
import FileInput from './FileInput';
import Button from './shared/Button';
import CodeInput from './shared/CodeInput';
import Pane from './shared/Pane';
import StageContext from '../context/StageContext';

const SecondStage = () => {
  const { nextStage } = useContext(StageContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col gap-[50px] container md:gap-0">
      <Pane className="flex flex-col gap-[50px]">
        <div className="rounded-[20px] bg-white/[0.07] p-[70px] backdrop-blur-[50px] flex flex-col gap-[35px] sora items-center md:p-[70px_20px]">
          <div className="p-[15px_20px] rounded-[50px] border-blue-5 border-2">
            Step 2: Test the Agent
          </div>
          <p className="text-[15px] font-[500] text-center">
            Your Agent is now in the twilight zone. You can test and interact
            with this Agent below before bringing it fully to life.
          </p>
        </div>

        <div className="flex flex-col gap-[30px]">
          <div className="flex gap-[15px]">
            <h4 className="flex-1 section-title">Test the created AI Agent:</h4>
          </div>

          <Pane className="flex flex-col gap-[30px]" size="sm">
            <div className="flex flex-col gap-[15px]">
              <CodeInput label="Input:" />

              <FileInput label="Here you can attach files to test the Agent" />
            </div>

            <Button className="self-center md:self-stretch" type="outline">
              get output
            </Button>

            <CodeInput label="Output:" />
          </Pane>
        </div>

        <div className="flex flex-col gap-[50px]">
          <h4 className="text-center section-title">
            Chat with the created AI Agent:
          </h4>

          <Chat />
        </div>
      </Pane>

      <Button
        className="self-center md:self-stretch md:mt-[50px]"
        type="primary"
        onClick={() => nextStage()}
      >
        Deploy the Agent
      </Button>
    </div>
  );
};

export default SecondStage;
