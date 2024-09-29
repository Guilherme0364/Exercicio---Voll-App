import { View, StyleSheet } from 'react-native';
import React from 'react';

export const Divider = ({ color = '#a3a3a3', thickness = 1 }) => {
  return <View style={[styles.divider, { backgroundColor: color, height: thickness }]} />;
}

const styles = StyleSheet.create({
  divider: {
    width: '80%',
    height: 1,
    backgroundColor: '#a3a3a3',
    marginVertical: 40,
    alignSelf: "center"
  },
});