import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const MovieCard = ({data, navigation}) => {

    const imagen = `https://image.tmdb.org/t/p/original${data.poster_path}`;

    return(
        <TouchableOpacity
        onPress= {() => {
            navigation.navigate("Pelicula", {
                pelicula: data.id
            })
        }}
        >
            <View style={style.card} >
                <Image
                source={{uri: imagen}}
                resizeMode="cover"
                style={{width: 130, height: 180, borderRadius: 10}}
                />
                <Text style={style.title} > {data.title} </Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    card: {
        margin: 10
    },
    title: {
        fontWeight: "bold",
        width: 130,
        fontSize: 10,
        marginTop: 5
    }
})

export default MovieCard;