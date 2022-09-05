import React, { useEffect, useState } from 'react';
import RoutesPath from './routes/routes';
import { useAppDispatch, useAppSelector } from './app/hooks';
import LoadingBar from 'react-top-loading-bar';
import { deleteCookie, getCookie } from './utils/helperFuns';
import { changeAuth } from './features/user/userSlice';

function App() {
  const isLoading = useAppSelector((state) => state.progress.isLoading);
  const dispatch = useAppDispatch();

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

  useEffect(() => {
    const token = getCookie('token');
    if (token !== '') {
      dispatch(changeAuth({ auth: true, username: '' }));
    }
    return function () {
      console.log('end');
      window.addEventListener('beforeunload', deleteCookie.bind(null, 'token'));
    };
  }, []);

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
