import { Text, View, Image, StyleSheet, TextInput} from "react-native";

export default function Index() {
	return (
		<View style={styles.container}>

			<Image source={require('@/src/assets/images/Logo.png')} style={styles.image} />			

			<Text style={styles.text}>Faça seu login em sua conta</Text>

			<View style={styles.inputBox}>
				<Text style={styles.label}>Email</Text>
				<TextInput 
				style={styles.input} 
				placeholder="Insira seu endereço de email: "/>
			</View>

			<View style={styles.inputBox}>
				<Text style={styles.label}>Senha</Text>
				<TextInput 
				style={styles.input} 
				placeholder="Insira sua senha: "/>
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
	},
	image:{
		marginBottom: 40
	},
	text: {
	  fontSize: 20,
	  fontWeight: "bold",
	  color: "grey",
	  textAlign: "center",
	  marginTop: 5,
	  marginBottom: 5
	},
	label: {
		fontSize: 15,
		fontWeight: 500
	},
	inputBox: {
	  marginTop: 20,
	  width: "100%"
	},
	input: {
	  fontSize: 15,
	  width: "100%",
	  padding: 20,
	  backgroundColor: "#f3f3f3",
	  color: "grey",
	  borderRadius: 10,
	  borderWidth: 1,
	  borderColor: '#ccc',
	  shadowColor: '#000',
	  shadowOffset: { width: 0, height: 2 },
	  shadowOpacity: 0.2,
	  shadowRadius: 3,
	  elevation: 3, 
	}
  });
  