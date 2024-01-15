import { Blocks } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Blocks
      height="50"
      width="50"
      color="#4fa94d"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        position: 'absolute',
        left: '80px',
      }}
      wrapperClass="blocks-wrapper"
      // visible={true}
    />
  );
};
