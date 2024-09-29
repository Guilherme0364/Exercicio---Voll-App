import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface Props{
    text: string;
    color?: string
    fontSize?: number
}

export const Title = ({ text, color, fontSize }: Props) => {
  return (
    <Text style={[styles.text, {color: color}, {fontSize: fontSize}]}>{text}</Text>
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