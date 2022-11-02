import { View, Text, Image, StyleSheet, ImageBackground, ScrollView, Button } from "react-native";
import { useEffect, useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import Cast from "../components/Show/Cast";
import CreatedBy from "../components/Show/CreatedBy";
import Seasons from "../components/Show/Seasons";
import Episodies from "../components/Show/Episodies";
import Networks from "../components/Show/Networks";


const Serie = ({ route }) => {

    const {serie} = route.params
    const [serieInfo, setSerieInfo] = useState([])
    const [cast, setCast] = useState([]);
    const apiKey = "8c04e8d54f6cd03989b2ce231b026efa";
    const portada = `https://image.tmdb.org/t/p/original${serieInfo.backdrop_path}`; 
    const poster = `https://image.tmdb.org/t/p/original${serieInfo.poster_path}` 
    const vote = serieInfo.vote_average

    const serieFetch = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${serie}?api_key=${apiKey}&language=es`)
        const data = await response.json()
        setSerieInfo(data)
    }

    const castFetch= async () => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${serie}/credits?api_key=${apiKey}&language=es`)
        const data = await response.json()
        setCast(data.cast)
    }

    useEffect(()=>{
        serieFetch()
        castFetch()
    }, [])

    return(
        <ScrollView>
            <ImageBackground
            source={{uri: portada}}
            resizeMode= "cover"
            style={style.portada}
            >
                <View style={{flexDirection: "row", backgroundColor: "rgba(0, 0, 0, 0.582)", flex: 1, alignSelf: 'stretch',
                alignItems: "center", justifyContent: "center"
            }} >
                    <Image
                    source={{uri: poster}}
                    resizeMode= "cover"
                    style={style.poster}
                    />
                    <View style={style.info} >
                        <View style={{flexDirection: "row", alignItems: "center"}} >
                            <Text style={style.titulo} > {serieInfo.original_name} </Text>
                            <View style={style.vote}>
                                <AntDesign name="star" size={12} color="#C8F560" />
                                {vote === undefined ? "" : 
                                <Text style={{color: "#C8F560", fontSize: 12}} > {vote.toFixed(1)} </Text>
                                }
                            </View>
                        </View>
                        {serieInfo.genres === undefined ? <Text></Text>:
                        <View style={{flexDirection: "row", marginTop: 10, flexWrap: "wrap"}} >
                            {serieInfo.genres.map((g,index) => 
                                <View style={style.genero} key={index} >
                                    <Text style={{fontSize: 10}} > {g.name} </Text>
                                </View> 
                            )}
                        </View>
                        }
                        <View style={{height: 100}}>
                            <ScrollView>
                                <Text style={style.descripcion} > {serieInfo.overview} </Text>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <CreatedBy info={serieInfo.created_by} />
            <Cast cast={cast}/>
            <Seasons seasons={serieInfo.seasons}/>
            <Episodies
            lastCap={serieInfo.last_episode_to_air}
            nextCap={serieInfo.next_episode_to_air}
            />
            <Networks networks={serieInfo.networks}/>
{/*             <Button 
            title="Prueba"
            onPress={()=>{
                console.log(serieInfo.networks)
            }}
            /> */}
        </ScrollView>
    )
}

const style = StyleSheet.create({
    portada: {
        height: 300,
        justifyContent: "center",
        alignItems: "center"
    },
    poster: {
        height: 200,
        width: 140,
        borderRadius: 10
    },
    info: {
        width: 150,
        padding: 10
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 15,
        color: "white"
    },
    descripcion: {
        fontSize: 10,
        color: "#C8F560"
    },
    genero: {
        backgroundColor: "#C8F560",
        padding: 5,
        alignSelf: "flex-start",
        borderRadius: 10,
        marginRight: 7,
        marginBottom: 5
    },
    tituloDos: {
        fontSize: 15,
        fontWeight: "bold",
        color: "black",
        paddingLeft: 5,
        paddingTop: 10,
    },
    vote: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "black",
        borderRadius: 10,
        padding: 5
    }
})

export default Serie;