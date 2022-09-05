import React, { useEffect } from 'react';

export default function useProgress(
  isLoading: boolean,
  setProgress: React.Dispatch<React.SetStateAction<number>>
) {
  return useEffect(() => {
    let timer: undefined | ReturnType<typeof setInterval>;
    if (isLoading === true) {
      timer = setInterval(() => {
        setProgress((s) => s + 7);
      }, 500);
    }
    return function () {
      if (timer) clearInterval(timer);
      setProgress(100);
    };
  }, [isLoading]);
}
