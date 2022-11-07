import { Text, View, FlatList } from "react-native";
import Movie from "./Movie";

const ListMovies = ({navigation, movies}) => {

    return(
            <FlatList
            data={movies}
            horizontal={false}
            keyExtractor={item => item.id}
            numColumns={3}
            renderItem={({item}) => <Movie item={item} navigation={navigation}/>}
            contentContainerStyle={{alignItems:"center", justifyContent: "center"}}
            />
    )
}

export default ListMovies;