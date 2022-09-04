import React, { useEffect, useState } from 'react';
import RoutesPath from './routes/routes';
import { useAppSelector } from './app/hooks';
import LoadingBar from 'react-top-loading-bar';

function App() {
  const isLoading = useAppSelector((state) => state.progress.isLoading);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
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

  return (
    <>
      <LoadingBar
        color="#ffffff"
        progress={progress}
        height={7}
        onLoaderFinished={() => setProgress(0)}
      />
      <RoutesPath />
    </>
  );
}

export default App;
