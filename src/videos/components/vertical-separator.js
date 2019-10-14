import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

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
    >
      <Text>Separador</Text>
    </View>
  );
}

export default verticalSeparator;
