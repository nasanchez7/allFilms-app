import { Text, View, Image, FlatList, StyleSheet } from "react-native";


const CreatedBy = ({info}) => {

    return(
        <View>
            <Text style={style.titulo} >Creado por </Text>
            <FlatList
            data={info}
            horizontal
            style={{padding:10}}
            renderItem={({item}) => 
            <View>
                <Image
                source={{uri: `https://image.tmdb.org/t/p/original${item.profile_path}`}}
                resizeMode="cover"
                style={{width: 130, height: 180, borderRadius: 10, marginRight: 10}}
                />
                <Text style={{marginTop: 5, fontSize: 12}} > {item.name} </Text>
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
        color: "black",
        paddingLeft: 5,
        paddingTop: 10,
    }
})

export default CreatedBy;