import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router"
import { Title } from "../components/Title";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { CustomLink } from "../components/CustomLink";
import { ScreenPadding } from "../utils/ScreenPadding";

export default function Index() {
	return (
		<View style={[styles.screen, ScreenPadding]}>

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

			<Link href={"/(tabs)/Main"} asChild> 			
				<Button
					text="Entrar"		
					marginTop={30}					
				/>
			</Link>

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
