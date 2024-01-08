import { useContext } from 'react';
import Switch from './shared/Switch';
import SettingsContext from '../context/SettingsContext';

const SilenceModeSwitcher = () => {
  const { silenceMode, setSilenceMode } = useContext(SettingsContext);

  return (
    <div className="flex gap-[8px] items-center fixed top-[20px] right-[20px]">
      <div className="text-blue-4 uppercase font-bold text-[12px] leading-[16px]">
        Silence
      </div>
      <Switch value={silenceMode} setValue={setSilenceMode} />
    </div>
  );
};

export default SilenceModeSwitcher;
