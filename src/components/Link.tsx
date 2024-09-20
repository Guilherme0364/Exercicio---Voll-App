import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

interface Props{
    text: String,     
    url?: String
}

export function Link( {text, url}: Props) {
    return (
        <Pressable style={styles.link}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    link:{
        marginTop: 15 
    },
    text:{
        textDecorationLine: "underline",
		fontFamily: "sans-serif",
		color: "#0B3B60",		
    }
})