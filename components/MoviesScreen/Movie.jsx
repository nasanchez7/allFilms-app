import { Image, TouchableOpacity, StyleSheet } from "react-native";

const Movie = ({item, navigation}) => {
    return(
        <TouchableOpacity
        style={style.container}
        onPress={()=>{
            navigation.navigate("Pelicula", {
                pelicula: item.id,
                name: item.title
            })
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