import { Puff } from 'react-loader-spinner';

const Spinner = () => {
  return (
<Puff
  height="80"
  width="80"
  radius={1}
  color="rgb(0, 153, 255)"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
  );
};

export default Spinner;