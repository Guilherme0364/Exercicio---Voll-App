import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { Link, router } from "expo-router"
import { Title } from "../components/Title";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { CustomLink } from "../components/CustomLink";
import { ScreenPadding } from "../utils/ScreenPadding";
import { signIn } from "../services/authService";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

export default function Index() {

	const [email, setEmail] = useState('')
	const [senha, setSenha] = useState('')
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function loginAuth(){
			const token  = await AsyncStorage.getItem('token')
			if(token){
				router.replace('/(tabs)/Main')
			} else{
				console.log('Não foi encontrado o token')
			}
			setLoading(false)
		}
		loginAuth()
	}, [])

	async function login() {
		const resutlt = await signIn(email, senha)
		if (resutlt) {
			const { token } = resutlt
			AsyncStorage.setItem('token', token)
			
			const decodedToken = (jwtDecode as any)(token);
			const patientId = decodedToken.id

			AsyncStorage.setItem('patientId', patientId)

			router.replace('/(tabs)/Main')
		} else {
			console.log('Erro')
		}
	}

	// Se está carregando, não exibe a tela de login, e se há o token, já vai direto para o menu
	if(loading){ 
		return null
	}

	return (
		<View style={[styles.screen, ScreenPadding]}>

			<Image source={require('@/src/assets/images/Logo.png')} style={styles.image} />

			<Title
				text={"Faça seu login em sua conta"}
			/>

			<Input
				label={"Email"}
				placeholder={"Insira seu endereço de email:"}
				value={email}
				onChangeText={setEmail}
			/>

			<Input
				label={"Senha"}
				placeholder={"Insira sua senha:"}
				value={senha}
				onChangeText={setSenha}
				secureTextEntry
			/>

			<Button
				text="Entrar"
				marginTop={30}
				onPress={login}
			/>

			<CustomLink
				text={"Esqueceu a senha?"}
			/>

			<View style={styles.register}>
				<Text>Ainda não tem cadastro?</Text>
				<Pressable>
					<Link href={"/Register"} style={styles.textRegister}> Faça seu cadastro</Link>
				</Pressable>
			</View>
		</View>
	);
}


const styles = StyleSheet.create({
	screen: {
		display: 'flex',
		flexDirection: "column",
		flex: 1, // Ocupa a tela inteira
		alignItems: "center",
		backgroundColor: '#fff',
		justifyContent: "center",
	},
	image: {
		marginBottom: 40
	},
	register: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 80
	},
	textRegister: {
		color: "#0B3B60"
	}
});
