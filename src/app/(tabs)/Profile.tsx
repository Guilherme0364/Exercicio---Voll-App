import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Title } from '@/src/components/Title';
import { Avatar } from '@/src/components/Avatar';
import { Divider } from '@/src/components/Divider';
import { ScreenPadding } from '@/src/utils/ScreenPadding'; 
import React from 'react';

export default function Profile() {
  return (
    <ScrollView style={[styles.screen, ScreenPadding]}>
      <View style={styles.container}>
        <Title text={"Meu perfil"} color='#339CFF' fontSize={26} />

        <Avatar source={"https://github.com/Guilherme0364.png"} size={70} />

        <Title text='Informações pessoais' color='#339CFF' fontSize={22} />

        <View style={styles.info}>
          <Title text='Guilherme Dias Gregório' />
          <Text style={styles.textInfo}>03/06/2004</Text>
          <Text style={styles.textInfo}>São João da Boa Vista</Text>
        </View>

        <Divider />

        <Title text='Histórico médico' color='#339CFF' fontSize={22} />
        <Text style={styles.textHistory}>Bronquite</Text>
        <Text style={styles.textHistory}>Sinusite</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,    
  },
  container: {
    marginVertical: 10,
    alignItems: 'center',
  },
  info: {
    marginTop: 8,
    alignItems: 'center',
  },
  textInfo: {
    fontSize: 15,
    color: 'grey',
  },
  textHistory: {
    fontSize: 20,
    fontWeight: 600,
    color: 'grey',
  },
});
