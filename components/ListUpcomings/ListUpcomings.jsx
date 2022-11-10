import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native"
import MovieCard from "../ListMovies/MovieCard";


const ListUpcomings = ({upcomings, navigation}) => {

    return(
        <View>
            <Text style={style.titulo} >Lo que se viene! </Text>
            <FlatList
            data={upcomings}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem= { ({item}) =>
                <MovieCard data={item} navigation={navigation}/>
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
        paddingBottom: 10,
        color: "white"
    }
})  

export default ListUpcomings;