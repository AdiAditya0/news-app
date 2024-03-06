import {useEffect, useState} from 'react';
import {Article, NewsResponse} from '../../Types';
import networkManager from '../../Services/NetworkManager/NetworkManager';

export function useGetTopHeadlines() {
  const [newsList, setNewsList] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = (await networkManager.get(
          '/top-headlines?pageSize=2&language=en',
        )) as NewsResponse;
        setNewsList(response.articles);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return {
    newsList,
  };
}
