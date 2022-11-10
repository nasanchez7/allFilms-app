import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import Movie from "../../screens/Movie";
import Serie from "../../screens/Serie";


const HomeStack = () => {

    const HomeStack = createNativeStackNavigator();
    const globalScreenOptions = {
        headerStyle: { backgroundColor: "#C8F560" },
        headerTitleStyle: { color: "black"},
        headerTintColor: "black"
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