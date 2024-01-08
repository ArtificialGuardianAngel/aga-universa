import { FC, PropsWithChildren, createContext, useState } from 'react';

interface ISettingsContext {
  silenceMode: boolean;
  setSilenceMode: (value: boolean) => void;
}

const NOOP = () => {};

const SettingsContext = createContext<ISettingsContext>({
  silenceMode: false,
  setSilenceMode: NOOP,
});

export const SettingsContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [silenceMode, setSilenceMode] = useState(false);

  return (
    <SettingsContext.Provider value={{ silenceMode, setSilenceMode }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
