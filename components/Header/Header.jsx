import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, FlatList, useWindowDimensions 
, Animated
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useState, useRef } from "react";

const Header = ({navigation, peliculas}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const {width} = useWindowDimensions();
    const scrollX = useRef(new Animated.Value(0)).current;
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current
    const viewableItemsChanged = useRef(({viewableItems}) => {
        setCurrentIndex(viewableItems[0].index)
    }).current
    const slidesRef = useRef(null)

    return(
        <View style={styles.container} >
            <Text style={styles.titulo}> Destacados de la semana </Text>
                <FlatList
                data={peliculas}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}],
                    {useNativeDriver: false}
                    )}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                scrollEventThrottle={32}
                ref={slidesRef}
                renderItem={ ({item}) => 
                <TouchableOpacity style={styles.header}
                onPress= {() => {
                    navigation.navigate("Pelicula", {
                        pelicula: item.id
                    })
                }}
                >
                    <ImageBackground
                    source={{uri: `https://image.tmdb.org/t/p/original${item.backdrop_path}`}}
                    style={{height: 230, width}}
                    resizeMode="contain"
                    >
                        <View style={styles.movie}>
                            <View style={styles.titleVote}>
                                <Text style={styles.titleMovie} > {item.title}</Text>
                                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center"}} >
                                    <AntDesign name="star" size={13} color="#C8F560" />
                                    <Text style={styles.vote} > {item.vote_average} </Text>
                                </View>
                            </View>
                        </View>   
                    </ImageBackground>
                </TouchableOpacity>
                }
                />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
    },
    imagen: {
        height: 200,
        position: "relative"
    },
    movie: {
        position: "absolute",
        bottom: 20,
        right: 10,
        padding: 10,
        backgroundColor: "black",
        borderRadius: 10
    },
    titleVote: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center"
    },  
    titleMovie: {
        color: "white",
        marginRight: 10,
        fontWeight: "bold",
        fontSize: 10
    },
    vote: {
        color: "#C8F560",
        alignSelf: "flex-start",
        fontSize: 10
    },      
    titulo: {
        fontSize: 15,
        fontWeight: "bold",
        color: "black",
        paddingLeft: 5,
        paddingTop: 10,
        paddingBottom: 5
    }
})

export default Header;

