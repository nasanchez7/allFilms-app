import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import Movie from "../../screens/Movie";
import Serie from "../../screens/Serie";


const HomeStack = () => {

    const HomeStack = createNativeStackNavigator();
    const globalScreenOptions = {
        headerStyle: { backgroundColor: "#111315" },
        headerTitleStyle: { color: "white"},
        headerTintColor: "white"
    }

    return(
        <HomeStack.Navigator
        initialRouteName="allFilms"
        screenOptions={globalScreenOptions}
        >
            <HomeStack.Screen name="allFilms" component={Home} />
            <HomeStack.Screen name="Pelicula" component={Movie} />
            <HomeStack.Screen name="Serie" component={Serie} />
        </HomeStack.Navigator>
    )
}

export default HomeStack