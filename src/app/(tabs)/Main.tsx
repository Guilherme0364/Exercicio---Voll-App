import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import { Link } from "expo-router"
import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ScreenPadding } from '@/src/utils/ScreenPadding';
import React from 'react'

export default function Main() {
	return (
		<ScrollView style={[styles.screen, ScreenPadding]}>
			<Image source={require('@/src/assets/images/Logo.png')} style={styles.image} />

			<Title text='Boas-vindas!' textAlign='left' fontSize={25} color='#339CFF'/>

			<View>
				<Input placeholder={'Digite a especialidade'}/>
				<Input placeholder={'Digite sua localização'}/>
				<Button text='Buscar' marginTop={15}/>
			</View>
		</ScrollView> 
  )
}

const styles = StyleSheet.create({
	screen:{
		display: 'flex',
		flexDirection: "column",
		flex: 1, 
		backgroundColor: '#fff',	
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 12	
	},
	image:{
		marginTop: 20,
		marginBottom: 30,
		marginLeft: 20
	},

})