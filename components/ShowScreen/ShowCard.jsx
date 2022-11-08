import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ShowCard = ({navigation, item}) => {
    return(
        <TouchableOpacity style={style.container}
        onPress={()=>{
            navigation.navigate("Serie", {serie: item.id})
        }}
        >
            <Image
            style={style.image}
            source={{uri: `https://image.tmdb.org/t/p/original${item.poster_path}`}}
            />
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        margin: 5
    },  
    image: {
        height: 160,
        width: 110,
        borderRadius: 10
    }
})

export default ShowCard