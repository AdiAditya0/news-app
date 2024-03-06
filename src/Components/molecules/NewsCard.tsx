import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Article, FontFamily} from '../../Types';
import {placeHolderImage} from '../../Assets';

interface Props {
  article: Article;
}

function NewsCard({article}: Props) {
  return (
    <View style={styles.container}>
      {article.urlToImage ? (
        <Image style={styles.image} source={{uri: article.urlToImage}} />
      ) : (
        <Image style={styles.image} source={placeHolderImage} />
      )}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{article.source?.name}</Text>
        <Text style={styles.description}>{article.title}</Text>
        <Text style={styles.date}>{article.publishedAt}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 16,
    flexDirection: 'row',
    backgroundColor: 'white',
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
  },
  description: {
    flexShrink: 1,
    fontFamily: FontFamily.RobotoMedium,
    fontSize: 14,
    marginBottom: 8,
  },
  date: {
    flexShrink: 1,
    fontFamily: FontFamily.RobotoRegular,
    fontSize: 12,
    marginBottom: 5,
  },
});

export default NewsCard;
