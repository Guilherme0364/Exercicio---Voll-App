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
				name='Doutora Marina'
				specialty='Cardiologista'
				image='https://clinicaimed.com.br/wp-content/uploads/2021/07/Qual-medico-e-indicado-para-o-tratamento-da-covid-imed.jpg'
				date='20/04/2025'

			/>

			<Divider />
			<Title text='Consultas passadas' color='#339CFF' textAlign='left'/>

			<AppointmentCard
				name='Doutor Rogério'
				specialty='Cardiologista'
				image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS622Wvi8NWtVWitWE4Q18yt7L-jhTgdLj7LdT33NIoiZiWkeCrx0UlRa41O4wvtReleLI&usqp=CAU'
				date='05/05/2025'
				// Se foi passado como parâmetro, significa que é 'true'
				wasAttended
				wasScheduled
			/>

			<AppointmentCard
				name='Doutor João'
				specialty='Ortopedista'
				image='https://saudeid.com.br/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmarketplace-saudeid-blog%2F4_motivos_para_procurar_um_medico_clinico_geral_3c6a60f3af%2F4_motivos_para_procurar_um_medico_clinico_geral_3c6a60f3af.jpg&w=3840&q=75'
				date='20/06/2025'
				wasAttended
				wasScheduled
			/>
		</ScrollView>
	)
}