import { View, Image, Text } from "react-native";
import styles from "../styles/CharacterStyles";


export default function CharacterCard ({character}) {
    return (

        <View style={styles.card}>
            <Image source={{uri: character.image}} style={styles.image}/>
            <Text style={styles.name}>{character.name}</Text>
            <Text style={styles.info}>{character.status - character.species}</Text>
        </View>

    );

}
