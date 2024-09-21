import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface Props{
    text: String
}

export function Title({ text }: Props) {
  return (
    <Text style={styles.text}>{text}</Text>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "grey",
        textAlign: "center",
        margin: 5        
      },
})