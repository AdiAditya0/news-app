import React, {useContext, useMemo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {Article, FontFamily} from '../../Types';
import {placeHolderImage} from '../../Assets';
import {ThemeContext} from '../../utilities/ThemeContext';
import {ThemeInterface} from '../../utilities/themes';

interface Props {
  article: Article;
}

function NewsCard({article}: Props) {
  const {theme} = useContext(ThemeContext);

  const styles = getStyles(theme);
  const publishedDate = useMemo(() => {
    return new Date(article.publishedAt).toUTCString();
  }, [article.publishedAt]);

  function handleOnPress() {
    Linking.openURL(article.url).catch(err =>
      console.error('An error occurred', err),
    );
  }

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={styles.container}
      activeOpacity={1}>
      {article.urlToImage ? (
        <Image style={styles.image} source={{uri: article.urlToImage}} />
      ) : (
        <Image style={styles.image} source={placeHolderImage} />
      )}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{article.source?.name}</Text>
        <Text style={styles.description}>{article.title}</Text>
        <Text style={styles.date}>{publishedDate}</Text>
      </View>
    </TouchableOpacity>
  );
}

const getStyles = (theme: ThemeInterface) =>
  StyleSheet.create({
    container: {
      marginHorizontal: 10,
      marginTop: 10,
      borderRadius: 16,
      flexDirection: 'row',
      backgroundColor: theme.secondaryBackgroundColor,
      elevation: 10,
      shadowRadius: 10,
    },
    detailsContainer: {
      margin: 10,
      flexShrink: 1,
    },
    image: {
      width: '30%',
      aspectRatio: 1,
      margin: 10,
      resizeMode: 'contain',
    },
    title: {
      flexShrink: 1,
      fontFamily: FontFamily.RobotoBold,
      fontSize: 16,
      marginBottom: 8,
      color: theme.textColor,
    },
    description: {
      flexShrink: 1,
      fontFamily: FontFamily.RobotoMedium,
      fontSize: 14,
      marginBottom: 8,
      color: theme.secondaryTextColor,
    },
    date: {
      flexShrink: 1,
      fontFamily: FontFamily.RobotoRegular,
      fontSize: 12,
      marginBottom: 5,
      color: theme.secondaryTextColor,
    },
  });

export default NewsCard;
