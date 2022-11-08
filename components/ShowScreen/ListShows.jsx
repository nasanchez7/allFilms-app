import { FlatList, View, Text } from "react-native";
import ShowCard from "./ShowCard";

const ListShows = ({navigation, shows}) => {
    return(
        <View>
            <FlatList
            data={shows}
            horizontal={false}
            numColumns={3}
            contentContainerStyle={{alignItems: "center", justifyContent: "center"}}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => 
            <ShowCard item={item} navigation={navigation}/>
            }
            />
        </View>
    )
}

export default ListShows;