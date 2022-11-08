import {View, Text, FlatList, StyleSheet} from "react-native"
import ActorCard from "./ActorCard";

const ListActors = ({actors, navigation}) => {

    return(
        <View>
            <Text style={style.titulo}> Top actores de la semana </Text>
            <FlatList
            style={{padding: 10}}
            showsHorizontalScrollIndicator={false}
            data={actors}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({item}) => <ActorCard item={item} navigation={navigation}/>}
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

export default ListActors;