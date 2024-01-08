import type { FC } from 'react';
import sendIcon from '../assets/icons/send.svg';

const MOCK_MESSAGES = [
  {
    type: 'incoming',
    message: 'What do you want to know today?',
  },
  {
    type: 'outgoing',
    message: 'Your message...',
  },
  {
    type: 'incoming',
    message:
      'Donec sed odio dui. Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.',
  },
];

interface IncomingMessageProps {
  message: string;
}

const IncomingMessage: FC<IncomingMessageProps> = ({ message }) => {
  return (
    <div className="max-w-[calc(100%-20px)]">
      <span className="text-accent-green">AI Agent:</span>
      <span className="ml-[5px]">{message}</span>
    </div>
  );
};

interface OutgoingMessageProps {
  message: string;
}

const OutgoingMessage: FC<OutgoingMessageProps> = ({ message }) => {
  return (
    <div className="p-[15px] rounded-[10px] bg-white/5 max-w-[calc(100%-20px)] self-end w-full">
      <span className="text-accent-green">You:</span>
      <span className="ml-[5px]">{message}</span>
    </div>
  );
};

const Chat = () => {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="p-[30px_15px] bg-code-input-bg rounded-[20px] text-[16px] flex flex-col gap-[20px] h-[400px] overflow-y-auto">
        {MOCK_MESSAGES.map((item, i) => {
          if (item.type === 'incoming') {
            return <IncomingMessage key={i} message={item.message} />;
          }

          if (item.type === 'outgoing') {
            return <OutgoingMessage key={i} message={item.message} />;
          }
        })}
      </div>

      <div className="flex gap-[20px] p-[10px_10px_10px_25px] rounded-[50px] bg-white/15 backdrop-blur-[15px]">
        <input
          className="flex-1 bg-transparent outline-none text-[15px] font-[500]"
          placeholder="Ask your question here..."
        />

        <div className="cursor-pointer">
          <img src={sendIcon} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
