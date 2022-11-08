import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native"
import ShowCard from "./ShowCard";

const ListShows = ({data, navigation}) => {


    return(
        <View>
            <Text style={style.titulo} > Series destacadas </Text>
            <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem= { ({item}) =>
                <ShowCard data={item} navigation={navigation} />
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

export default ListShows;