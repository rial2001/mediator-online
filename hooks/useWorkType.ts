import { useSelector } from 'react-redux';

import { typeWorkSelector } from '@redux/work/workSelectors';

const useWorkType = type => {
  const work = useSelector(state => typeWorkSelector(state, type));

  return work;
};

export default useWorkType;
