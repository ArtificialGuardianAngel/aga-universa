import { FC, PropsWithChildren, useEffect } from 'react';
import Pane from './shared/Pane';
import TitlePane from './shared/TitlePane';
import JsonToKeyValue from './shared/JsonToKeyValue';
import Button from './shared/Button';

const MOCK_OBJECT = {
  api_key: 'ABC123XYZ789',
  endpoint: 'https://api.llmprovider.com/v1/chat',
  headers: {
    Authorization: 'Bearer ABC123XYZ789',
    'Content-Type': 'application/json',
  },
  body: {
    prompt: 'Explain quantum computing.',
    max_tokens: 100,
    temperature: 0.7,
  },
};

const PageTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h2 className="p-[50px_0_30px] text-[30px] font-[300] text-center text-white">
      {children}
    </h2>
  );
};

const FourthStage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col gap-[20px] container">
      <Pane className="flex flex-col gap-[50px]">
        <div className="rounded-[20px] bg-white/[0.07] p-[70px] backdrop-blur-[50px] flex flex-col gap-[35px] sora items-center md:p-[70px_20px]">
          <div className="p-[15px_20px] rounded-[50px] border-blue-5 border-2">
            Step 4: Agent Credentials
          </div>
          <p className="text-[15px] font-[500] text-center">
            Here, you can find the credentials and private keys for accessing
            the created Agent.
          </p>
        </div>

        <div className="flex flex-col gap-[30px]">
          <TitlePane>Basic information</TitlePane>

          <JsonToKeyValue data={MOCK_OBJECT}></JsonToKeyValue>
        </div>
      </Pane>

      <Pane>
        <div className="flex flex-col gap-[30px]">
          <TitlePane>PDF files attached</TitlePane>

          <JsonToKeyValue
            data={{
              'File 1': 'LangAgent – Documentation.pdf',
              'File 2': 'LangAgent – Expansion.pdf',
            }}
            dividers
          ></JsonToKeyValue>
        </div>
      </Pane>

      <PageTitle>Download all credentials</PageTitle>

      <Pane className="flex flex-col gap-[30px]">
        <div className="text-center">
          Download all the data above as a single .PDF or .DOCX file and save it
          in a secure location so that you can always access it.
        </div>

        <div className="flex gap-[5px] justify-center">
          <Button type="outline">Export as .PDF</Button>
          <Button type="outline">Export as .DOCX</Button>
        </div>

        <div className="h-[1px] bg-white/5"></div>

        <div className="text-center">
          To create a new agent, first download the credentials as a .PDF or
          .DOCX file.
        </div>

        <Button className="self-center" type="primary" disabled>
          Create new Agent
        </Button>
      </Pane>
    </div>
  );
};

export default FourthStage;
