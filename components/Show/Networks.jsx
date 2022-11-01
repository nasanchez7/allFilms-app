import { Text, View, StyleSheet, FlatList, Image } from "react-native";

const Networks = ({networks}) => {

    return(
        <View>
            <Text style={style.titulo} >Disponible para ver en </Text>
            <FlatList
            data={networks}
            horizontal
            style={{padding: 10}}
            renderItem={({item}) => 
            <Image
            source={{uri: `https://image.tmdb.org/t/p/original${item.logo_path}`}}
            resizeMode="contain"
            style={{height: 50, width: 80, marginRight: 15}}
            />
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
    }
})

export default Networks;