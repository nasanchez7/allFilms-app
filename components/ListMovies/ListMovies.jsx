import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native"
import MovieCard from "./MovieCard"

const ListMovies = ({data, navigation}) => {


    return(
        <View>
            <Text style={style.titulo} > Peliculas destacadas </Text>
                <FlatList
                horizontal
                showsVerticalScrollIndicator = {false}
                data={data}
                renderItem={ ({item}) => 
                    <MovieCard navigation={navigation} data={item}/>
                }
                />
        </View>
    )
}

const style = StyleSheet.create({
    titulo: {
        fontWeight: "bold",
        fontSize: 15,
        paddingLeft: 5,
        paddingTop: 10,
        paddingBottom: 10
    }
})

export default ListMovies