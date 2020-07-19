import React, { SFC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { navigate } from '../navigation/navigationRef';
import { NewsItemImage, NewsSubheaderView, Subheader } from '../styledElements';

const NewsItem = ({ section }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigate('NewsScreen', {
          source: section.source.name,
          key: section.key,
        })
      }
    >
      <View style={styles.container}>
        {section.urlToImage ? (
          <NewsItemImage source={{ uri: section.urlToImage }} />
        ) : null}
        <NewsSubheaderView>
          <Subheader>{section.title}</Subheader>
          <Text>{section.source.name}</Text>
        </NewsSubheaderView>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderTopColor: 'grey',
    borderTopWidth: 1,
    marginRight: 8,
  },
});

export default NewsItem;
