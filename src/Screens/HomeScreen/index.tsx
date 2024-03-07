import React, {useCallback, useContext, useLayoutEffect, useMemo} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SwipeableFlatList from 'react-native-swipeable-list';
import NewsCard from '../../components/NewsCard';
import {Article} from '../../types';
import {ThemeContext} from '../../utilities/ThemeContext';
import {ThemeInterface} from '../../utilities/themes';
import {useDispatch, useSelector} from 'react-redux';
import {useHandleTopNews} from '../../hooks/handlers';
import {IRootState} from '../../redux/store';
import {
  addPinnedNews,
  markNewsAsSeen,
  updateNewsBatchAsSeen,
} from '../../redux/slices/topNewsSlice';
import {deleteImage, pinImage, placeHolderImage} from '../../assets';

const HomeScreen = ({navigation}) => {
  const {theme} = useContext(ThemeContext);
  const {topNews, pinnedNews} = useSelector(
    (state: IRootState) => state.reducer,
  );
  const displayNews = [...pinnedNews, ...topNews.slice(0, 10)];
  const dispatch = useDispatch();
  useHandleTopNews();
  const styles = useMemo(() => getStyles(theme), [theme]);

  const renderReloadButton = useCallback(() => {
    return (
      <TouchableOpacity
        style={styles.reloadButton}
        onPress={() => {
          dispatch(updateNewsBatchAsSeen());
        }}>
        <Text style={styles.reloadText}>Reload</Text>
      </TouchableOpacity>
    );
  }, [dispatch, styles]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: renderReloadButton,
    });
  }, [navigation, renderReloadButton]);

  function renderItem({item}: {item: Article}) {
    return <NewsCard article={item} />;
  }

  function renderQuickActions({item}: {item: Article}) {
    return (
      <View style={styles.qaContainer}>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => {
            dispatch(markNewsAsSeen(item));
          }}>
          <Image source={deleteImage} style={styles.deleteImage} />
        </TouchableOpacity>
        {!item.isPinned && (
          <TouchableOpacity
            style={styles.pinButton}
            onPress={() => {
              dispatch(addPinnedNews(item));
            }}>
            <Image source={pinImage} style={styles.pinImage} />
          </TouchableOpacity>
        )}
      </View>
    );
  }

  function keyExtractor(item: Article) {
    return item.id;
  }

  return (
    <SafeAreaView style={styles.container}>
      {displayNews.length === 0 ? (
        <Image style={styles.placeHolder} source={placeHolderImage} />
      ) : (
        <View style={styles.listContainer}>
          <SwipeableFlatList
            data={displayNews}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            maxSwipeDistance={120}
            renderQuickActions={renderQuickActions}
            shouldBounceOnMount={false}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const getStyles = (theme: ThemeInterface) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.backgroundColor,
    },
    qaContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      margin: 10,
    },
    deleteButton: {
      width: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
    deleteImage: {
      height: 30,
      width: 30,
      tintColor: theme.textColor,
    },
    pinButton: {
      width: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
    pinImage: {
      height: 32,
      width: 32,
      tintColor: theme.textColor,
    },
    placeHolder: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    reloadButton: {
      marginHorizontal: 10,
    },
    reloadText: {
      color: theme.textColor,
    },
    listContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.backgroundColor,
    },
  });

export default HomeScreen;
