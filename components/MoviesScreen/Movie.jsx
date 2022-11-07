import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView, Button } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Movie = ({item, navigation}) => {
    

    return(
        <TouchableOpacity
        style={style.container}
        onPress={()=>{
            navigation.navigate("Pelicula", {pelicula: item.id})
        }}
        >
            <Image
            source={{uri: `https://image.tmdb.org/t/p/original${item.poster_path}`}}
            resizeMode="cover"
            style={style.image}
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

export default Movie;