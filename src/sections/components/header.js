import React from 'react';
import {View, Image, StyleSheet, SafeAreaView} from 'react-native';

const logo = require('../../../assets/logo.png');

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain',
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

function Header({children}) {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <Image source={logo} style={styles.logo} />
          <View style={styles.right}>{children}</View>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default Header;
