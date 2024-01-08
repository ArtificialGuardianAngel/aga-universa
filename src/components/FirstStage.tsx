import { useContext, useRef, useState } from 'react';
import StageContext from '../context/StageContext';

import KeyFeatures from './KeyFeatures';
import Button from './shared/Button';
import CodeInput from './shared/CodeInput';
import CodeOutput from './shared/CodeOutput';
import Input from './shared/Input';
import Pane from './shared/Pane';
import Textarea from './shared/Textarea';
import Select from './shared/Select';
import FileInput from './FileInput';

const FirstStage = () => {
  const { nextStage } = useContext(StageContext);
  const [testSelect, setTestSelect] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col gap-[20px] container md:gap-0">
      <Pane>
        <div className="flex flex-col gap-[50px]">
          <div className="rounded-[20px] bg-white/[0.07] p-[70px] backdrop-blur-[50px] flex flex-col gap-[35px] sora items-center md:p-[70px_20px]">
            <h2 className="text-white text-[40px] font-[200] md:text-[18px] md:text-center md:max-w-[310px]">
              Welcome to{' '}
              <span className="md:text-[40px] md:font-bold">UNIVERSA</span>
            </h2>
            <div className="p-[15px_20px] rounded-[50px] border-blue-5 border-2 md:text-[14px]">
              Step 1: Agent Creation
            </div>
            <p className="text-[15px] font-[500] text-center md:text-[14px]">
              In the first step, you are composing the DNA of your Agent.
            </p>
          </div>

          <div className="flex flex-col gap-[30px]">
            <Input
              label="Create a name for the Agent:"
              placeholder="e.g. LangAgent"
              tip="e.g. Introducing the AI Linguist – an innovative virtual companion designed to enhance language learning experience"
            />

            <Input
              label="One-line summary:"
              placeholder="e.g. AI linguist: a virtual companion for seamless language learning and fluency mastery."
              tip="e.g. Introducing the AI Linguist – an innovative virtual companion designed to enhance language learning experience"
            />

            <Textarea
              label="Full summary:"
              placeholder="e.g. Introducing the AI Linguist – an innovative virtual companion designed to enhance language learning experience. With adaptable technology, it personalizes lessons, offers real-time feedback, and creates immersive environments."
              tip="e.g. Introducing the AI Linguist – an innovative virtual companion designed to enhance language learning experience"
            />

            <Textarea
              label="Goals:"
              placeholder="e.g. teaching one billion people a new language"
              tip="e.g. Introducing the AI Linguist – an innovative virtual companion designed to enhance language learning experience"
            />

            <Select
              label="Qualities:"
              options={['Quality 1', 'Quality 2', 'Quality 3', 'Quality 4']}
              placeholder="Choose..."
              tip="e.g. Introducing the AI Linguist – an innovative virtual companion designed to enhance language learning experience"
              value={testSelect}
              onChange={(e) => setTestSelect(e)}
              multiple
            />

            <Input
              label="Keywords:"
              placeholder="e.g. learning, languages, school, etc. (separated by comas)"
              tip="e.g. Introducing the AI Linguist – an innovative virtual companion designed to enhance language learning experience"
            />
          </div>
        </div>
      </Pane>

      <Pane>
        <FileInput
          ref={fileInputRef}
          label="Here you can attach PDF files related to the AI Agent you are creating (optional)"
        />
      </Pane>

      <Pane className="flex flex-col gap-[30px]">
        <h4 className="section-title">Input / output data:</h4>

        <Pane className="flex flex-col gap-[30px]" size="sm">
          <CodeInput
            label="Input:"
            tip="e.g. Introducing the AI Linguist – an innovative virtual companion designed to enhance language learning experience"
            placeholder="e.g. Enable anyone in the world to learn a new language at their own pace with a personalized learning program tailored to their learning preferences and schedule."
          />

          <CodeInput
            label="Output:"
            tip="e.g. Introducing the AI Linguist – an innovative virtual companion designed to enhance language learning experience"
            placeholder={`An example output from the input above:${'\r\n\r\n'}I am now prepared as an agent to enable anyone in the world to learn a new language at their own pace with a personalized learning program tailored to their individual preferences and schedule.`}
            readonly
          />
        </Pane>
      </Pane>

      <Pane className="flex flex-col gap-[30px]">
        <div className="flex gap-[15px]">
          <h4 className="flex-1 section-title">
            Large Language Model (LLM) details:
          </h4>
        </div>

        <Pane className="flex flex-col gap-[30px]" size="sm">
          <CodeOutput />

          <Button type="secondary" className="self-start md:self-stretch">
            Add next
          </Button>
        </Pane>
      </Pane>

      <Pane className="flex flex-col gap-[30px]">
        <div className="flex gap-[15px]">
          <h4 className="flex-1 section-title">Vector Database details:</h4>
        </div>

        <Pane className="flex flex-col gap-[30px]" size="sm">
          <CodeOutput />

          <Button type="secondary" className="self-start md:self-stretch">
            Add next
          </Button>
        </Pane>
      </Pane>

      <Pane className="flex flex-col gap-[30px]">
        <div className="flex gap-[15px]">
          <h4 className="flex-1 section-title">API credentials:</h4>
        </div>

        <Pane className="flex flex-col gap-[30px]" size="sm">
          <CodeOutput />

          <Button type="secondary" className="self-start md:self-stretch">
            Add next
          </Button>
        </Pane>
      </Pane>

      <Pane className="flex flex-col gap-[30px]">
        <Input
          label="Library:"
          placeholder="e.g. Miko, Michał, etc (separated by comas)"
          tip="e.g. Introducing the AI Linguist – an innovative virtual companion designed to enhance language learning experience"
        />

        <Input
          label="Cooperating AI Agents:"
          placeholder="e.g. Miko, Michał, etc (separated by comas)"
          tip="e.g. Introducing the AI Linguist – an innovative virtual companion designed to enhance language learning experience"
        />
      </Pane>

      <KeyFeatures />

      <Button
        className="self-center md:self-stretch"
        type="primary"
        onClick={() => nextStage()}
      >
        Generate AI Agent
      </Button>
    </div>
  );
};

export default FirstStage;
