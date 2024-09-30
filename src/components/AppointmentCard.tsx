import { Text, View, StyleSheet, Image } from 'react-native'
import { Avatar } from './Avatar'
import { Button } from './Button'
import React from 'react'

interface Props {
    name: string;
    image: string;
    specialty: string;
    date?: string;        
    wasAttended?: boolean;
    wasScheduled?: boolean;    
}

export const AppointmentCard = ({ name, image, specialty, date, wasAttended, wasScheduled }: Props) => {
    return (
        <View style={[styles.container, { backgroundColor: wasAttended ? '#C2E1FF' : 'white' }]}>
            <View style={styles.subContainer}>
                <Avatar source={image} size={60} marginTop={0} marginBottom={0} />
                <View style={styles.cardText}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.text}>{specialty}</Text>
                    <Text style={styles.text}>{date}</Text>
                </View>
            </View>
            {/* Foi agendado? Se sim, 'Cancelar consulta', se não 'Agendar consulta' */}
            <Button text={wasScheduled ? 'Cancelar consulta' : 'Agendar consulta'} marginTop={15} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
        padding: 15,
        marginVertical: 20,
        borderRadius: 20,
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
    },
    subContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10
    },
    cardText: {
        marginLeft: 20
    },
    text: {
        color: '#6B6E71',
        fontSize: 15
    },
    name: {
        color: '#6B6E71',
        fontSize: 17,
        fontWeight: '700'
    }
})
