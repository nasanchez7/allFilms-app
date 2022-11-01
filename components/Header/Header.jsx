import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Header = ({navigation, pelicula}) => {

    const imagen = `https://image.tmdb.org/t/p/original${pelicula.backdrop_path}`;

    return(
        <View style={styles.container} >
            <Text style={styles.titulo}> Destacado de la semana </Text>
                <TouchableOpacity style={styles.header}
                    onPress= {() => {
                        navigation.navigate("Pelicula", {
                            pelicula: pelicula.id
                        })
                    }}
                    >
                        <ImageBackground
                        source={{uri: imagen}}
                        style={styles.imagen}
                        resizeMode="cover"
                        >
                            <View style={styles.movie}>
                                <View style={styles.titleVote}>
                                    <Text style={styles.titleMovie} > {pelicula.title}</Text>
                                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center"}} >
                                        <AntDesign name="star" size={13} color="#C8F560" />
                                        <Text style={styles.vote} > {pelicula.vote_average} </Text>
                                    </View>
                                </View>
                            </View>   
                        </ImageBackground>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    header: {
        margin: 10,
        borderRadius: 10
    },
    imagen: {
        height: 200,
        position: "relative",
        borderRadius: 10
    },
    movie: {
        position: "absolute",
        bottom: 10,
        right: 10,
        padding: 10,
        backgroundColor: "black",
        borderRadius: 10
    },
    titleVote: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center"
    },  
    titleMovie: {
        color: "white",
        marginRight: 10,
        fontWeight: "bold",
        fontSize: 10
    },
    vote: {
        color: "#C8F560",
        alignSelf: "flex-start",
        fontSize: 10
    },      
    titulo: {
        fontSize: 15,
        fontWeight: "bold",
        color: "black",
        paddingLeft: 5,
        paddingTop: 10,
    }
})

export default Header;