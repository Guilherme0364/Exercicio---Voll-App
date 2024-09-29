import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { Section } from "@/src/utils/RegisterSection";
import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { CustomCheckbox } from "@/src/components/CustomCheckbox";
import { ScreenPadding } from "@/src/utils/ScreenPadding";
import { useState } from "react";

export default function Index() {

	const [numberSection, setNumberSection] = useState(0)


	function sectionAdvance() {
		if (numberSection < Section.length - 1) { // Arrays começam em 0
			setNumberSection(numberSection + 1)
		}
	}

	function sectionRetreat() {
		if (numberSection > 0) { // Arrays começam em 0
			setNumberSection(numberSection - 1)
		}
	}

	return (
		<ScrollView style={[styles.screen, ScreenPadding]}>

			<Image source={require('@/src/assets/images/Logo.png')} style={styles.image} />

			<Title
				text={Section[numberSection].title}
			/>

			<View style={{ width: "100%" }}>
				{
					Section[numberSection].textEntry?.map(entry => { // "?" após o permite o atributo ser opcional (receber undefined)
						return <Input
							label={entry.label}
							placeholder={entry.placeholder}
							key={entry.id}
						/> || []
					})
				}
			</View>

			{numberSection === 2 && <Text style={styles.planText}>Selecione o plano: </Text>}

			<View style={{ width: "100%" }}>
				{Section[numberSection].checkbox?.map(checkbox => { // "?" após o permite o atributo ser opcional (receber undefined)
						return <CustomCheckbox
							key={checkbox.id}
							text={checkbox.text}
						/> || []
				})}
			</View>

			{numberSection > 0 ? <Button // Pode ser "&&" ao invés de "?", só remover o ternário no final
				onPress={() => sectionRetreat()}
				text="Voltar"
				color="grey"
				marginTop={30}
			/> : []}

			{numberSection === 0 ? <Button
				onPress={() => sectionAdvance()}
				text="Avançar"
				marginTop={30}
			/> : // Se for 1° seção, exibe com mt=30, senão, mt=15
				<Button
					onPress={() => sectionAdvance()}
					text="Avançar"
					marginTop={15}
					marginBottom={15}
				/>}

		</ScrollView>
	);
}


const styles = StyleSheet.create({
	screen: {
		display: 'flex',
		flexDirection: "column",
		flex: 1, // Ocupa a tela inteira		
		backgroundColor: '#fff',
	},
	image: {
		marginBottom: 40,
		alignSelf: "center",
		marginTop: 20
	},
	planText: {
		color: "#0B3B60",
		fontWeight: '700',
		fontSize: 17,
		alignSelf: "flex-start",
		marginTop: 15,
		marginBottom: 10
	}
});
