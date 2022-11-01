import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";

const Similar = ({similares}) => {

    return(
        <View>
            <Text style={style.titulo} >Similares</Text>
            <FlatList
            data={similares}
            style={{padding: 10}}
            horizontal
            renderItem={ ({item}) => 
            <TouchableOpacity
            >
                <Image 
                source={{uri: `https://image.tmdb.org/t/p/original${item.poster_path}`}}
                resizeMode="cover"
                style={{width: 130, height: 180, borderRadius: 10, marginRight: 10}}
                />
                <Text style={style.nombre} > {item.title} </Text>
            </TouchableOpacity>
        }
            />
        </View>
    )
}

const style = StyleSheet.create({
    titulo: {
        fontSize: 15,
        fontWeight: "bold",
        color: "black",
        paddingLeft: 5,
        paddingTop: 10,
        marginBottom: 10
    },
    nombre: {
        marginTop: 5,
        width: 120,
        fontSize: 12
    }
})

export default Similar;