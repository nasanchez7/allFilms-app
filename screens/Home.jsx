import { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet, Button} from "react-native";
import Header from "../components/Header/Header";
import ListMovies from "../components/ListMovies/ListMovies";
import ListShows from "../components/ListShows/ListShows";

const Home = ({navigation}) => {

    const [movie, setMovie] = useState({});
    const [movies, setMovies] = useState({});
    const [shows, setShows] = useState({});
    const apiKey = "8c04e8d54f6cd03989b2ce231b026efa";

    const moviesFetch = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es&page=1`)
        const data = await response.json()
        setMovie(data.results[0])
        setMovies(data.results)
    }

    const showsFetch = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=es&page=1`)
        const data = await response.json();
        setShows(data.results)
    }

    useEffect(()=>{
        moviesFetch()
        showsFetch()
    }, [])

    return(
        <ScrollView>
            <Header pelicula={movie} navigation={navigation} />
            <ListMovies data={movies} navigation={navigation} />
            <ListShows navigation={navigation} data={shows} />
{/*             <Button 
            title="prueba"
            onPress={()=> console.log(shows)}
            /> */}
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


//Rutas dinamicas

/*
<TouchableOpacity style={styles.boton}
            onPress= {() => {
                navigation.navigate("Pelicula", {
                    pelicula: "Star Wars"
                })
            }}
            >
                <Text> Pelicula </Text>
</TouchableOpacity>

<TouchableOpacity style={styles.boton}
            onPress= {() => {
                navigation.navigate("Serie", {
                    serie: "House Of The Dragon"
                })
            }}
>
                <Text> Serie </Text>
</TouchableOpacity>
*/ 