import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Title } from "../components/Title";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Link } from "../components/Link";

export default function Index() {
	return (
		<View style={styles.container}>

			<Image source={require('@/src/assets/images/Logo.png')} style={styles.image} />

			<Title
				text={"Faça seu login em sua conta"}
			/>

			<Input
				label={"Email"}
				placeholder={"Insira seu endereço de email:"}
			/>

			<Input
				label={"Senha"}
				placeholder={"Insira sua senha:"}
			/>

			<Button
				text="Entrar"				
			/>

			<Link
				text={"Esqueceu a senha?"}
			/>

			<View style={styles.register}>
				<Text>Ainda não tem cadastro?</Text>
				<TouchableOpacity>
					<Text style={styles.textRegister}> Faça seu cadastro</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}


const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: "column",
		flex: 1, // Ocupa a tela inteira
		alignItems: "center",
		backgroundColor: '#fff',
		justifyContent: "center"
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
