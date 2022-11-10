import { View, Text, Image, StyleSheet, ImageBackground, ScrollView, Button } from "react-native";
import { useEffect, useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import Cast from "../components/Show/Cast";
import CreatedBy from "../components/Show/CreatedBy";
import Seasons from "../components/Show/Seasons";
import Episodies from "../components/Show/Episodies";
import Networks from "../components/Show/Networks";
import Trailers from "../components/Movie/Trailers";
import { useLayoutEffect } from "react";


const Serie = ({ route, navigation }) => {

    const {serie} = route.params
    const {name} = route.params
    const [serieInfo, setSerieInfo] = useState([])
    const [cast, setCast] = useState([]);
    const [trailers, setTrailers] = useState([]);
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

    const trailerFetch= async () => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${serie}/videos?api_key=${apiKey}&language=es`)
        const data = await response.json()
        setTrailers(data.results)
    }

    useEffect(()=>{
        serieFetch()
        castFetch()
        trailerFetch()
    }, [])

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerBackTitle: "Inicio",
            headerTitle: name
        })
    }, [navigation])

    return(
        <ScrollView style={{backgroundColor: "#2D2D2D"}}>
            <ImageBackground
            source={{uri: portada}}
            resizeMode= "cover"
            style={style.portada}
            >
                <View style={{
                    width: "100%",
                    height: 230,
                    backgroundColor:"black",
                    position:"absolute",
                    top: 0,
                    opacity: 0.6
                }}
                    />
                <Image
                source={{uri: poster}}
                resizeMode="contain"
                style={style.poster}
                />
            </ImageBackground>
            <View style={style.info} >
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}} >
                    <Text style={style.titulo} > {serieInfo.original_name} </Text>
                    <View style={style.vote}>
                        <AntDesign name="star" size={12} color="#C8F560" />
                        {vote === undefined ? "" : 
                        <Text style={{color: "#C8F560", fontSize: 12}} > {vote.toFixed(1)} </Text>
                        }
                    </View>
                </View>
                {serieInfo.genres === undefined ? <Text></Text>:
                    <View style={{flexDirection: "row", marginTop: 10, flexWrap: "wrap", marginBottom: 10}} >
                    {serieInfo.genres.map((g,index) => 
                        <View style={style.genero} key={index} >
                            <Text style={{fontSize: 10}} > {g.name} </Text>
                        </View> 
                    )}
                    </View>
                }
            </View>
            <View>
                <Text style={style.tituloTres} >Sinopsis</Text>
                <Text style={style.descripcion} > {serieInfo.overview} </Text>
            </View>
            <CreatedBy info={serieInfo.created_by} />
            <Cast cast={cast}/>
            <Trailers trailers={trailers}/>
            <Seasons seasons={serieInfo.seasons}/>
            <Episodies
            lastCap={serieInfo.last_episode_to_air}
            nextCap={serieInfo.next_episode_to_air}
            />
            <Networks networks={serieInfo.networks}/>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    portada: {
        height: 230,
        justifyContent: "center",
        alignItems: "center",
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20
    },
    poster: {
        height: 200,
        width: 140,
        borderRadius: 10
    },
    info: {
        padding: 5,
        marginTop: 10
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 18,
        width: 290,
        color: "white"
    },
    descripcion: {
        fontSize: 10,
        marginTop: 10,
        paddingStart: 5,
        color: "white"
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
        color: "white",
        paddingLeft: 5,
        paddingTop: 10,
    },
    vote: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "black",
        borderRadius: 10,
        padding: 5
    },
    tituloTres:{
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        paddingLeft: 5
    }
})

export default Serie;