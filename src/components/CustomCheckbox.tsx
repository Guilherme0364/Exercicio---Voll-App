import { View, Text, StyleSheet } from 'react-native'
import { Checkbox } from 'expo-checkbox'
import React, { useState } from 'react'

interface Props{
	text: String, 		
}

export function CustomCheckbox({ text }: Props) {

	const [isChecked, setChecked] = useState(false);

	return (
		<View style={styles.container}>
			<Checkbox
				value={isChecked}
				onValueChange={setChecked}
				style={styles.checkbox}
				color={isChecked ? '#0B3B60' : undefined}
			/>
			<Text style={styles.text}>{text}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		display: "flex",
		flexDirection: "row",
		margin: 10
	}, 
	checkbox:{
		width: 25,	
		height: 25	
	},
	text:{
		color: "lightblack",
		fontSize: 17,
		marginLeft: 10,		
		fontWeight: 500
	}
})