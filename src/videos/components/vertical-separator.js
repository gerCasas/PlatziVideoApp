import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1,
  },
});

function verticalSeparator({color}) {
  return (
    <View
      style={[
        styles.separator,
        {
          borderTopColor: color || '#eaeaea',
        },
      ]}
    />
  );
}

export default verticalSeparator;
