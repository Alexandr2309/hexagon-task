import { ThreeDots } from 'react-loader-spinner';
import React, { FC } from 'react';

const Loader: FC = () => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}
    >
      <ThreeDots
        color="#ffffff"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;
