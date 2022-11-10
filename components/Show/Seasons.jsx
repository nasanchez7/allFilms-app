import { View, Text, Image, FlatList, StyleSheet } from "react-native";

const Seasons = ({seasons}) => {


    return(
        <View>
            <Text style={style.titulo} >Temporadas emitidas </Text>
            <FlatList 
            data={seasons}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{padding: 10}}
            renderItem={({item}) => 
            <View>
                <Image 
                source={{uri: `https://image.tmdb.org/t/p/original${item.poster_path}`}}
                resizeMode="cover"
                style={{width: 130, height: 180, borderRadius: 10, marginRight: 10}}
                />
                <Text style={{marginTop: 5, width: 130, fontSize: 15, fontWeight: "bold",
            color: "white"}} > {item.name} </Text>
                <Text style={{fontSize: 10, color: "gray"}} > {item.episode_count} episodios </Text>
            </View>
        }
            />
        </View>
    )
}

const style = StyleSheet.create({
    titulo: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        paddingLeft: 5,
        paddingTop: 10,
    }
})

export default Seasons;