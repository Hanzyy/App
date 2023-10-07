import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFFFE0',
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    cards:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:'50px'
    },
    txt:{
        fontFamily:'Arial',
        fontSize:40
    }
})

export default styles