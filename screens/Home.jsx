import { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet, Button} from "react-native";
import Header from "../components/Header/Header";
import ListActors from "../components/ListActors/ListActors";
import ListMovies from "../components/ListMovies/ListMovies";
import ListShows from "../components/ListShows/ListShows";
import ListUpcomings from "../components/ListUpcomings/ListUpcomings";

const Home = ({navigation}) => {

    const [movies, setMovies] = useState([]);
    const [carrouselMovies, setCarrouselMovies] = useState([]);
    const [actors, setActors] = useState([]);
    const [shows, setShows] = useState([]);
    const [upcomings, setUpcomings] = useState([]);
    const apiKey = "8c04e8d54f6cd03989b2ce231b026efa";

    const moviesFetch = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es&page=1`)
        const data = await response.json()
        setCarrouselMovies([data.results[0], data.results[1], data.results[2], data.results[3]])
        setMovies(data.results)
    }

    const showsFetch = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=es&page=1`)
        const data = await response.json();
        setShows(data.results)
    }

    const upcomingsFetch = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=es&page=1`)
        const data = await response.json()
        setUpcomings(data.results)
    }

    const actorsFetch = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/trending/person/week?api_key=${apiKey}&language=es`)
        const data = await response.json()
        setActors(data.results)
    }

    useEffect(()=>{
        moviesFetch()
        showsFetch()
        upcomingsFetch()
        actorsFetch()
    }, [])

    return(
        <ScrollView style={{backgroundColor: "#2D2D2D"}}>
            <Header navigation={navigation} peliculas={carrouselMovies} />
            <ListUpcomings upcomings={upcomings} navigation={navigation}/>
            <ListActors actors={actors} navigation={navigation} />
            <ListMovies data={movies} navigation={navigation} />
            <ListShows navigation={navigation} data={shows} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    boton: {
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#C8F560",
        margin: 10
    }
})

export default Home;

