import { View, Text, Image, StyleSheet, ImageBackground, ScrollView, Button } from "react-native";
import { useEffect, useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import Cast from "../components/Movie/Cast";
import Similar from "../components/Movie/Similar";
import Trailers from "../components/Movie/Trailers";
import { useLayoutEffect } from "react";

const Movie = ({route, navigation}) => {

    const { pelicula } = route.params
    const { name } = route.params
    const [movie, setMovie] = useState({});
    const [cast, setCast] = useState([]);
    const [similar, setSimilar] = useState([]);
    const [trailers, setTrailers] = useState([]);
    const apiKey = "8c04e8d54f6cd03989b2ce231b026efa";
    const portada = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`; 
    const poster = `https://image.tmdb.org/t/p/original${movie.poster_path}`
    const vote = movie.vote_average

    const movieFetch = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${pelicula}?api_key=${apiKey}&language=es`)
        const data = await response.json();
        setMovie(data)
    }

    const castFetch = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${pelicula}/credits?api_key=${apiKey}&language=es`)
        const data = await response.json()
        setCast(data.cast)
    }

    const similarFetch = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${pelicula}/similar?api_key=${apiKey}&language=es&page=1`)
        const data = await response.json()
        setSimilar(data.results)
    }

    const trailerFetch = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${pelicula}/videos?api_key=${apiKey}&language=es`)
        const data = await response.json()
        setTrailers(data.results)
    }

    useEffect(()=> {
        movieFetch()
        castFetch()
        similarFetch()
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
                    <Text style={style.titulo} > {movie.original_title} </Text>
                    <View style={style.vote}>
                        <AntDesign name="star" size={12} color="#C8F560" />
                        {vote === undefined ? "" : 
                        <Text style={{color: "#C8F560", fontSize: 12}} > {vote.toFixed(1)} </Text>
                        }
                    </View>
                </View>
                {movie.genres === undefined ? <Text></Text>:
                    <View style={{flexDirection: "row", marginTop: 10, flexWrap: "wrap", marginBottom: 10}} >
                    {movie.genres.map((g,index) => 
                        <View style={style.genero} key={index} >
                            <Text style={{fontSize: 10}} > {g.name} </Text>
                        </View> 
                    )}
                    </View>
                }
            </View>
            <View>
                <Text style={style.tituloTres} >Sinopsis</Text>
                <Text style={style.descripcion} > {movie.overview} </Text>
            </View>
            <Cast cast={cast}/>
            <Trailers trailers={trailers}/>
            <Similar similares={similar}/>
            {/* <Button 
            title="prueba"
            onPress={()=> console.log(trailers)}
            />  */}
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
        marginRight: 7
    },
    tituloDos: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        paddingLeft: 5,
        paddingTop: 10,
    },
    tituloTres:{
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        paddingLeft: 5
    },  
    vote: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "black",
        borderRadius: 10,
        padding: 5
    }
})

export default Movie;