import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ShowCard = ({data, navigation}) => {

    const imagen = `https://image.tmdb.org/t/p/original${data.poster_path}`;

    return(
        <TouchableOpacity
        onPress= {() => {
            navigation.navigate("Serie", {
                serie: data.id
            })
        }}
        >
            <View style={style.card} >
                <Image
                source={{uri: imagen}}
                resizeMode="cover"
                style={{width: 130, height: 180, borderRadius: 10}}
                />
                {data.original_title === undefined ? <Text style={style.title} > {data.original_name} </Text>:
                <Text style={style.title} > {data.original_title} </Text>
                }
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    card: {
        margin: 10
    },
    title: {
        fontWeight: "bold",
        width: 130,
        fontSize: 10,
        marginTop: 5
    }
})

export default ShowCard;