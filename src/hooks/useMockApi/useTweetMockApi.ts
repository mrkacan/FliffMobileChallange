import {useState} from 'react';
import tweetsData from './tweets.json';
import {tweet} from '../../types';

type UseTweetMockApi = {
  data: tweet[];
  hasMore: boolean;
  fetchData: () => void;
  error: boolean;
  loading: boolean;
};

const LIMIT: number = 20;
const useTweetMockApi = (): UseTweetMockApi => {
  const [start, setStart] = useState(0);
  const [data, setData] = useState<tweet[] | []>([]);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    if (tweetsData.length === 0) {
      setLoading(false);
      setHasMore(false);
      return;
    }

    try {
      setTimeout(() => {
        const newData = tweetsData.slice(start, start + LIMIT);
        setData(prevData => [...prevData, ...newData] as tweet[]);
        setLoading(false);
        setStart(start + LIMIT);
        setHasMore(start + LIMIT < tweetsData.length);
      }, 1000);
    } catch {
      setError(true);
    }
  };

  return {
    data,
    hasMore,
    fetchData,
    loading,
    error,
  };
};

export default useTweetMockApi;
