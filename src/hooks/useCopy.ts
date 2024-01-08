import { useState } from 'react';

interface Params {
  delay?: number;
}

const useCopy = (params?: Params) => {
  const { delay = 1500 } = params || ({ delay: 1500 } as Params);

  const [copied, setCopied] = useState(false);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => setCopied(false), delay);
  };

  return { copied, copy };
};

export default useCopy;
