import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Divider } from '@/src/components/Divider';
import { ScreenPadding } from '@/src/utils/ScreenPadding';
import { Testimony } from '@/src/utils/Testimony';
import React from 'react'

export default function Main() {
	return (
		<ScrollView style={[styles.screen, ScreenPadding]}>
			<Image source={require('@/src/assets/images/Logo.png')} style={styles.image} />

			<Title text='Boas-vindas!' textAlign='left' fontSize={26} color='#339CFF' />

			<View style={styles.shadowBox}>
				<Input placeholder={'Digite a especialidade'} />
				<Input placeholder={'Digite sua localização'} />
				<Button text='Buscar' marginTop={15} />
			</View>

			<View>
				<Title text='Depoimentos' fontSize={26} color='#0B3B60' />
				<br />

				{Testimony.map(testimony => {
					return (
						<View key={testimony.id}>
							<Text style={styles.testimony}>{testimony.text}</Text>
							<Title text={`${testimony.autor}`} fontSize={18} />
							<Divider />
						</View>
					)
				})}

			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	screen: {
		display: 'flex',
		flexDirection: "column",
		flex: 1,
		backgroundColor: '#fff',
	},
	image: {
		marginTop: 20,
		marginBottom: 30,
		marginLeft: 20
	},
	shadowBox: {
		backgroundColor: '#fff',
		alignSelf: 'center',
		width: '90%',
		borderRadius: 10,
		padding: 15,
		// Sombras para iOS
		shadowColor: "#000",
		shadowOffset: {
			width: 3,
			height: 3,
		},
		shadowOpacity: 0.2,
		shadowRadius: 4,
		// Elevação para Android
		elevation: 3,
		marginTop: 10,
		marginBottom: 35
	},
	testimony: {
		fontSize: 16,
		color: '#90989F',
		padding: 15
	}
})
