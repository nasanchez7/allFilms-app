import { Text, Image, FlatList, StyleSheet, View } from "react-native";

const Cast = ({cast}) => {


    return(
        <View>
            <Text style={style.titulo} > Reparto </Text>
            {cast === undefined ? <Text></Text>:
            <FlatList
            data={cast}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{padding: 10}} 
            renderItem={ ({item}) => 
                <View key={item.id}>
                    <Image
                    source={{uri: `https://image.tmdb.org/t/p/original${item.profile_path}`}}
                    resizeMode="cover"
                    style={{width: 80, height: 100, borderRadius: 10, marginRight: 10}}
                    />
                    <Text style={style.nombre} > {item.name} </Text>
                </View>
                }
            />
            }
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
        marginBottom: 10
    },
    nombre: {
        marginTop: 5,
        width: 80,
        fontSize: 10,
        color: "white"
    }
})

export default Cast;