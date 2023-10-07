import { Image, Text, View } from "react-native"
import styles from "./styles";


const Card = (props) => {
    return(
        <View style = {styles.container}>
            <Image source={props.Imagem} style = {styles.img}></Image>
            <Text style = {styles.txt}>{props.Nome}</Text>
        </View>
    )
}

export default Card;