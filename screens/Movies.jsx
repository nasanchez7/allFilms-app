import { View, Text, SafeAreaView, ScrollView, StyleSheet, Button } from "react-native";
import { useEffect, useState } from "react";
import ListMovies from "../components/MoviesScreen/ListMovies";

const Movies = ({navigation}) => {

    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([])
    const apiKey = "8c04e8d54f6cd03989b2ce231b026efa";

    const moviesFetch = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es&page=1`)
        const data = await response.json()
        setMovies(data.results)
    }

    const genresFetch = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=es`)
        const data = await response.json()
        setGenres(data.genres)
    }

    useEffect(()=> {
        moviesFetch()
        genresFetch()
    }, [])

    return(
        <SafeAreaView>
            <ScrollView style={{backgroundColor: "#2D2D2D"}}>
                <Text style={style.titulo} >Peliculas populares</Text>
                <View>
                    <ListMovies
                    navigation={navigation}
                    movies={movies}
                    genres={genres}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    titulo: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        paddingLeft: 10,
        paddingTop: 15,
        paddingBottom: 15
    }
})

export default Movies;