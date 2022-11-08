import { Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import ListShows from "../components/ShowScreen/ListShows";
import { useEffect, useState } from "react";


const Tv = ({navigation}) => {

    const [shows, setShows] = useState([]);
    const apiKey = "8c04e8d54f6cd03989b2ce231b026efa";

    const showsFetch = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=es&page=1`)
        const data = await response.json();
        setShows(data.results)
    }

    useEffect(()=>{
        showsFetch()
    }, [])

    return(
        <SafeAreaView>
            <ScrollView>
                <Text style={style.titulo}>Series populares</Text>
                <ListShows navigation={navigation} shows={shows}/>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({

    titulo: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        paddingLeft: 10,
        paddingTop: 15,
        paddingBottom: 15
    }
})

export default Tv;