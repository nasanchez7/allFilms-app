import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Movies from "../../screens/Movies";
import Tv from "../../screens/Tv";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import HomeStack from "./HomeStack";

const Nav = () => {

    const Tab = createBottomTabNavigator();
    
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName="Inicio"
            screenOptions={{
                tabBarActiveTintColor: "#C8F560",
                tabBarInactiveTintColor: "white",
                tabBarStyle: {backgroundColor: "#111315"},
                headerShown: false
            }}
            >
                <Tab.Screen name="Home" component={HomeStack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" size={size} color={color} />
                    ),
                    headerShown: false
                }
                }
                
                />
                <Tab.Screen name="Peliculas" component={Movies}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="movie" size={size} color={color} />
                    )
                }}
                />
                <Tab.Screen name="Series" component={Tv}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="live-tv" size={size} color={color} />
                    )
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Nav;