import React from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';

const background = require('../../../assets/background.png');

const styles = StyleSheet.create({
  container: {paddingVertical: 10, paddingHorizontal: 10},
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

function CategoryListLayout({children, title}) {
  return (
    <ImageBackground source={background} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </ImageBackground>
  );
}

export default CategoryListLayout;
