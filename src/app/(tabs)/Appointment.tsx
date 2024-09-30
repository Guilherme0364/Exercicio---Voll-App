import { View, Text, ScrollView } from 'react-native'
import { AppointmentCard } from '@/src/components/AppointmentCard'
import { Divider } from '@/src/components/Divider';
import { Title } from '@/src/components/Title';
import { Button } from '@/src/components/Button';
import { ScreenPadding } from "@/src/utils/ScreenPadding";
import React from 'react'

export default function Appointment() {
	return (
		<ScrollView style={ScreenPadding}>
			
		<Title text='Minhas consultas' color='#339CFF' fontSize={25}/>
		<Button text='Agendar outra consulta' marginTop={30} marginBottom={30}/>

		<Title text='Próximas consultas' color='#339CFF' textAlign='left'/>
			<AppointmentCard
				name='Doutor João'
				specialty='Cardiologista'
				image='https://github.com/Guilherme0364.png'
				date='20/04/2025'

			/>

			<Divider />
			<Title text='Consultas passadas' color='#339CFF' textAlign='left'/>

			<AppointmentCard
				name='Doutor João'
				specialty='Cardiologista'
				image='https://github.com/Guilherme0364.png'
				date='20/04/2025'
				// Se foi passado como parâmetro, significa que é 'true'
				wasAttended
				wasScheduled
			/>

			<AppointmentCard
				name='Doutor João'
				specialty='Cardiologista'
				image='https://github.com/Guilherme0364.png'
				date='20/04/2025'
				wasAttended
				wasScheduled
			/>

			<AppointmentCard
				name='Doutor João'
				specialty='Cardiologista'
				image='https://github.com/Guilherme0364.png'
				date='20/04/2025'
				wasAttended
				wasScheduled
			/>
		</ScrollView>
	)
}