import {useState} from 'react';
import {Article, NewsResponse} from '../../Types';
import networkManager from '../../Services/NetworkManager/NetworkManager';
import uuid from 'react-native-uuid';

export function useGetTopHeadlines() {
  const [newsList, setNewsList] = useState<Article[]>([]);

  async function fetchData() {
    try {
      let response = (await networkManager.get(
        '/top-headlines?pageSize=100&language=en',
      )) as NewsResponse;
      response.articles.forEach(article => {
        article.id = uuid.v4().toString();
      });
      setNewsList(response.articles.filter(art => art.author !== null));
    } catch (err) {
      console.log(err);
    }
  }

  return {
    newsList,
    fetchData,
  };
}
