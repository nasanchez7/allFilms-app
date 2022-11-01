import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Episodies = ({lastCap, nextCap}) => {

    return(
        <View>
            {lastCap === undefined ? "" : <Text style={style.titulo} >Ultimo capitulo emitido </Text>}
            {lastCap === undefined ? "" :
            <View style={{backgroundColor: "black", margin: 10, borderRadius: 10}} >    
                <View style={{flexDirection: "row"}} >
                    <Image 
                    source={{uri: `https://image.tmdb.org/t/p/original${lastCap.still_path}`}}
                    resizeMode="cover"
                    style={{width: 230, height: 180, borderRadius: 10, marginRight: 8}}
                    />
                    <View style={{marginTop: 5, flex: 1, padding: 5, height: 170}} >
                        <Text style={style.name} > {lastCap.name} </Text>
                        <View style={style.voteContainer}>
                            <AntDesign name="star" size={13} color="#C8F560" />
                            <Text style={style.vote} > {lastCap.vote_average.toFixed(1)} </Text>
                        </View>
                        <ScrollView>
                            <Text style={style.description} >{lastCap.overview}</Text>
                        </ScrollView>
                    </View>
                </View>
            </View>    
            }
    
            {nextCap === null ? "" : <Text style={style.titulo} >Proximo capitulo </Text>}
            {nextCap === null ? "" :
            <View style={{backgroundColor: "black", margin: 10, borderRadius: 10}} >    
                <View style={{flexDirection: "row"}} >
                    <Image 
                    source={{uri: `https://image.tmdb.org/t/p/original${nextCap.still_path}`}}
                    resizeMode="cover"
                    style={{width: 230, height: 180, borderRadius: 10, marginRight: 8}}
                    />
                    <View style={{marginTop: 5, flex: 1, padding: 5, height: 170}} >
                        <Text style={style.name} > {nextCap.name} </Text>
                        <View style={style.voteContainer}>
                            <AntDesign name="star" size={13} color="#C8F560" />
                            <Text style={style.vote} > {nextCap.vote_average.toFixed(1)} </Text>
                        </View>
                        <ScrollView>
                            <Text style={style.description} >{nextCap.overview}</Text>
                        </ScrollView>
                    </View>
                </View>
            </View>    
            }
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
    },
    name: {
        fontWeight: "bold",
        fontSize: 12,
        color: "white"
    },
    description: {
        fontSize: 11,
        color: "#C8F560"
    },
    voteContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "start",
        marginTop: 5,
        marginBottom: 5
    },
    vote: {
        color: "#C8F560",
        alignSelf: "flex-start",
        fontSize: 10
    }
})

export default Episodies;