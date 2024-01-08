import { useContext } from 'react';
import FirstStage from './components/FirstStage';
import FourthStage from './components/FourthStage';
import ProgressBlock from './components/ProgressBlock';
import SecondStage from './components/SecondStage';
import ThirdStage from './components/ThirdStage';
import StageContext from './context/StageContext';
import VideoBackground from './components/shared/VideoBackground';
import SilenceModeSwitcher from './components/SilenceModeSwitcher';
import SettingsContext from './context/SettingsContext';

function App() {
  const { stage } = useContext(StageContext);
  const { silenceMode } = useContext(SettingsContext);

  return (
    <div className="text-blue-5 p-[20px_0_140px] md:pt-0 md:pb-[200px]">
      {stage === 0 && <FirstStage />}
      {stage === 1 && <SecondStage />}
      {stage === 2 && <ThirdStage />}
      {stage === 3 && <FourthStage />}
      {!silenceMode && <VideoBackground />}
      <ProgressBlock />
      <SilenceModeSwitcher />
    </div>
  );
}

export default App;
