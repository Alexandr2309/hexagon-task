import React, { useEffect, useState } from 'react';
import RoutesPath from './routes/routes';
import { useAppDispatch, useAppSelector } from './app/hooks';
import LoadingBar from 'react-top-loading-bar';
import { deleteCookie, getCookie } from './utils/helperFuns';
import { changeAuth } from './features/user/userSlice';
import useProgress from './hooks/useProgress';

function App() {
  const isLoading = useAppSelector((state) => state.progress.isLoading);
  const dispatch = useAppDispatch();

  const [progress, setProgress] = useState<number>(0);

  useProgress(isLoading, setProgress);

  useEffect(() => {
    const token = getCookie('token');
    if (token !== '') {
      const username = getCookie('username');
      dispatch(changeAuth({ auth: true, username: username }));
    }
  }, []);

  return (
    <>
      <LoadingBar
        color="#ffffff"
        progress={progress}
        height={9}
        onLoaderFinished={() => setProgress(0)}
      />
      <RoutesPath />
    </>
  );
}

export default App;
