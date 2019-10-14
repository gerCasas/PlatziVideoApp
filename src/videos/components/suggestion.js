import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const logo = require('../../../assets/logo.png');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  genre: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'black',
  },
  genreText: {
    color: 'white',
    fontSize: 11,
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  cover: {
    height: 150,
    width: 100,
    resizeMode: 'contain',
  },
  right: {
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: '#44546b',
  },
  year: {
    backgroundColor: '#70b124',
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: 'white',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  rating: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

function suggestion(props) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image style={styles.cover} source={logo} />
        <View style={styles.genre}>
          <Text style={styles.genreText}>Accion</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.title}>FoobarSuggestion</Text>
        <Text style={styles.year}>2007</Text>
        <Text style={styles.rating}>5 Estrellas</Text>
      </View>
    </View>
  );
}

export default suggestion;
