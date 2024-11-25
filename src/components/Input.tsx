import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

interface Props{
    label?: String
    placeholder: String
	value?: string
	secureTextEntry?: boolean 
	onChangeText?: (text: string) => void
}

export const Input = ({ label, placeholder, value, secureTextEntry, onChangeText }: Props) => {
    return (
        <View style={styles.inputBox}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={`${placeholder}`} 
				value= {value}
				secureTextEntry = {secureTextEntry}
				onChangeText={onChangeText}									
			/>				
        </View>
    )
}

const styles = StyleSheet.create({
	label: {
		fontSize: 15,
		fontWeight: '500'
	},
	inputBox: {
	  marginTop: 20,
	  width: "100%"
	},
	input: {
	  fontSize: 15,
	  width: "100%",
	  padding: 20,
	  backgroundColor: "#f3f3f3",
	  color: "grey",
	  borderRadius: 10,
	  borderWidth: 1,
	  borderColor: '#ccc',
	  shadowColor: '#000',
	  shadowOffset: { width: 0, height: 2 },
	  shadowOpacity: 0.2,
	  shadowRadius: 3,
	  elevation: 3,
	  
	},
})