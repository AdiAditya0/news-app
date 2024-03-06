import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {useGetTopHeadlines} from '../../Hooks/API';
import NewsCard from '../../Components/molecules/NewsCard';
import {Article} from '../../Types';

const HomeScreen = () => {
  const {newsList} = useGetTopHeadlines();

  function renderItem({item}: {item: Article}) {
    return <NewsCard article={item} />;
  }

  return (
    <SafeAreaView>
      <FlatList data={newsList} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default HomeScreen;
