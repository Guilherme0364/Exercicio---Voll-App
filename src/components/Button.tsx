import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
    color?: string; // Valor opcional, por padrão é azul
    text: string;
	onPress?: () => void;
	marginTop?: number;
	marginBottom?: number;
}

export function Button({ color, text, marginTop, marginBottom, onPress }: Props) {
    return (
        <Pressable 
			style={[styles.button, {backgroundColor: color}, {marginTop: marginTop}, {marginBottom: marginBottom}]} 
			onPress={onPress}
		>
        	<Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
	button: {
		width: "100%",
		backgroundColor: "#0B3B60",		
		padding: 20,
		alignItems: "center",
		borderRadius: 5
	},
	buttonText: {
		color: "#ffffff"
	},
})