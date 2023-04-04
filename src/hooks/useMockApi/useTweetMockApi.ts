import {useState} from 'react';
import DATA from './tweets.json';
import {tweet} from '../../types';

type UseTweetMockApi = {
  data: tweet[];
  hasMore: boolean;
  fetchData: () => void;
};

const LIMIT: number = 20;
const useTweetMockApi = (): UseTweetMockApi => {
  const [start, setStart] = useState(0);
  const [data, setData] = useState<tweet[] | []>([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = () => {
    if (DATA.length === 0) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      const newData = DATA.slice(start, start + LIMIT);
      setData(prevData => [...prevData, ...newData] as tweet[]);

      setStart(start + LIMIT);
      setHasMore(start + LIMIT < DATA.length);
    }, 1000);
  };

  return {
    data,
    hasMore,
    fetchData,
  };
};

export default useTweetMockApi;
