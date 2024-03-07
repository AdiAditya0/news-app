import {useState} from 'react';
import {Alert} from 'react-native';
import uuid from 'react-native-uuid';

import {Article, NewsResponse} from '../../types';
import networkManager from '../../services/NetworkManager/NetworkManager';

export function useGetTopHeadlines() {
  const [newsList, setNewsList] = useState<Article[]>([]);

  async function fetchData(pageSize: number) {
    try {
      const response = (await networkManager.get('/top-headlines', {
        params: {
          pageSize,
          language: 'en',
        },
      })) as NewsResponse;
      response.articles.forEach(article => {
        article.id = uuid.v4().toString();
        article.isPinned = false;
      });
      setNewsList(response.articles.filter(art => art.author !== null));
    } catch (err) {
      Alert.alert('oops...', 'Something went wrong while fetching the data');
    }
  }

  return {
    newsList,
    fetchData,
  };
}
