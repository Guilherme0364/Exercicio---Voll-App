import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

interface Props {
	text: string;
	color?: string;
	fontSize?: number;	
	textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify'; // Só são aceitos essas entradas
}

export const Title = ({ text, color, fontSize, textAlign }: Props) => {
	return (
		<Text style={[styles.text, { color: color }, { fontSize: fontSize }, { textAlign: textAlign }]}>
			{text}
		</Text>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'grey',
		textAlign: 'center',
		margin: 5,
	},
});
