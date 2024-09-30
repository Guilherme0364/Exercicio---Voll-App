import { ScrollView, View, StyleSheet } from 'react-native';
import { Button } from '../../components/Button';
import { AppointmentCard } from '../../components/AppointmentCard';
import { Input } from '../../components/Input';
import { Title } from '../../components/Title';
import React from 'react';

export default function Explorar() {
	return (
		<ScrollView style={styles.container}>


			<View style={styles.searchBox}>
				<Input placeholder={'Digite a especialidade'} />
				<Input placeholder={'Digite sua localização'} />
				<Button text='Buscar' marginTop={15} />
			</View>

			<Title text="Resultado da Busca" color="#339CFF" textAlign="center" />

			{[1, 2, 3].map((_, index) => (
				<View style={styles.cardContainer} key={index}>
					<AppointmentCard
						name="Dr. Cunha"
						specialty="Cardiologia"
						image="https://github.com/andreocunha.png"
						date="20/04/2025"
					/>
				</View>
			))}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		padding: 15,
	},
	searchBox: {
		backgroundColor: '#fff',
		alignSelf: 'center',
		width: '90%',
		borderRadius: 10,
		padding: 15,
		shadowColor: "#000",
		shadowOffset: {
			width: 3,
			height: 3,
		},
		shadowOpacity: 0.2,
		shadowRadius: 4,
		elevation: 3,
		marginTop: 10,
		marginBottom: 35
	},
	cardContainer: {
		width: '100%',
		marginTop: 20,
	},
});
