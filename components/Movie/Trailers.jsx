import { Text, View, FlatList, StyleSheet } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const Trailers = ({trailers}) => {

    return(
    <View>
        <Text style={style.titulo}> Trailers </Text>
        <FlatList
        contentContainerStyle={{padding:10}}
        data={trailers}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({item}) => 
        <View style={{width: 280, marginRight: 10}}>
            <YoutubePlayer
            height={165}
            width={280}
            videoId={item.key}
            />
            <Text> 
                {item.name} 
            </Text>
        </View>
        }/>
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
    }
})

export default Trailers;