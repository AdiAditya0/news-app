import React, {useContext} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import NewsCard from '../../Components/molecules/NewsCard';
import {Article} from '../../Types';
import SwipeableFlatList from 'react-native-swipeable-list';
import {ThemeContext} from '../../utilities/ThemeContext';
import {ThemeInterface} from '../../utilities/themes';
import {useSelector} from 'react-redux';
import {TopNewsStore} from '../../redux/slices/topNewsSlice';
import {useHandleTopNews} from '../../Hooks/handlers';
import {IRootState} from '../../redux/store';

const HomeScreen = () => {
  const {theme} = useContext(ThemeContext);
  const {topNews, pinnedNews} = useSelector(
    (state: IRootState) => state.reducer,
  );
  useHandleTopNews();
  const styles = getStyles(theme);
  const displayNews = [...pinnedNews, ...topNews.slice(0, 10)];

  function renderItem({item}: {item: Article}) {
    return <NewsCard article={item} />;
  }

  function renderQuickActions({index, item}: {index: number; item: Article}) {
    return (
      <View style={styles.qaContainer}>
        <Text>{index.toString() + item.author}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <SwipeableFlatList
        data={displayNews}
        keyExtractor={(item: Article) => item.title}
        renderItem={renderItem}
        maxSwipeDistance={120}
        renderQuickActions={renderQuickActions}
      />
    </SafeAreaView>
  );
};

const getStyles = (theme: ThemeInterface) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.backgroundColor,
    },
    qaContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      margin: 10,
    },
  });

export default HomeScreen;
