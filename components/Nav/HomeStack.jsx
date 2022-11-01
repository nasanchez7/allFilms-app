import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import Movie from "../../screens/Movie";
import Serie from "../../screens/Serie";


const HomeStack = () => {

    const HomeStack = createNativeStackNavigator();

    return(
        <HomeStack.Navigator
        initialRouteName="Inicio"
        >
            <HomeStack.Screen name="Inicio" component={Home} />
            <HomeStack.Screen name="Pelicula" component={Movie} />
            <HomeStack.Screen name="Serie" component={Serie} />
        </HomeStack.Navigator>
    )
}

export default HomeStack