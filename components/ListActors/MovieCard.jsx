import { Image, TouchableOpacity, StyleSheet } from "react-native"

const MovieCard = ({item, navigation}) => {

    return(
        <TouchableOpacity
        style={{marginBottom: 10}}
        onPress={()=>{
            navigation.navigate("Pelicula", {
                pelicula: item.id,
                name: item.title
            })
        }}
        >
            <Image
            source={{uri: `https://image.tmdb.org/t/p/original${item.poster_path}`}}
            style={style.image}
            />
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    titulo: {
        color: "white"
    },
    image: {
        height: 150,
        width: 100,
        borderRadius: 5
    }
})

export default MovieCard