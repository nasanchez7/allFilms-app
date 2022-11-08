import { Image, Text, View, StyleSheet, FlatList } from "react-native";
import MovieCard from "./MovieCard";

const ActorCard = ({item, navigation}) => {

    const imagenActor = `https://image.tmdb.org/t/p/original${item.profile_path}`;

    return(
        <View style={style.container}>
            <Image
            source={{uri: imagenActor}}
            resizeMode="cover"
            style={style.image}
            />
            <View style={{padding:10, height: 200, width: 200}}>
                <Text style={style.name}> {item.name} </Text>
                <Text style={{color: "#C8F560", marginBottom: 5, fontSize: 10}} > Sus obras destacadas </Text>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={item.known_for}
                    renderItem={({item}) => <MovieCard item={item} navigation={navigation}/>}
                    contentContainerStyle={{alignItems: "center", padding: 5}}
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "black",
        marginRight: 20,
        flexDirection: "row",
        borderRadius: 10,
    },
    image: {
        height: 200,
        width: 120,
        borderRadius: 10
    },
    name: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    }
})

export default ActorCard;