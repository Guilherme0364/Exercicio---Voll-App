import { View, StyleSheet } from 'react-native';
import React from 'react';

export const Divider = ({ color = '#e1e1e1', thickness = 1 }) => {
  return <View style={[styles.divider, { backgroundColor: color, height: thickness }]} />;
}

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#e1e1e1',
    marginVertical: 10,
  },
});