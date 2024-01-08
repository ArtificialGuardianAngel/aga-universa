import { FC, PropsWithChildren, createContext, useState } from 'react';

interface IStageContext {
  stage: number;
  setStage: (stage: number) => void;
  nextStage: () => void;
  prevStage: () => void;
}

const NOOP = () => {};

const StageContext = createContext<IStageContext>({
  stage: 0,
  setStage: NOOP,
  nextStage: NOOP,
  prevStage: NOOP,
});

export const StageContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [stage, setStage] = useState(0);

  const nextStage = () => setStage((p) => p + 1);

  const prevStage = () => setStage((p) => p - 1);

  return (
    <StageContext.Provider value={{ stage, setStage, nextStage, prevStage }}>
      {children}
    </StageContext.Provider>
  );
};

export default StageContext;
