import { Text, View } from "react-native";
import styles from "./styles";
import Card from "../../../components/Card";


export default function LoginPage(){
    return(
        <View style = {styles.container}>
            <Text style ={styles.txt}>Trocas</Text>
            <View style = {styles.cards}>
                <Card
                Imagem = {require("../../../assets/whatsapp.png")}
                Nome = {"Fala cambada"}
                ></Card>
                <Card
                Imagem = {require("../../../assets/whatsapp.png")}
                Nome= {"Mano craft falando"}
                ></Card>
                <Card
                Imagem = {require("../../../assets/whatsapp.png")}
                Nome= {"E bem vindos ao meu canal"}
                ></Card>
            </View>
        </View>
    )
}