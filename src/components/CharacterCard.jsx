import { View, Image, Text, Button } from "react-native";
import styles from "../styles/CharacterStyles";


export default function CharacterCard ({character, onDelete}) {
    return (

        <View style={styles.card}>
            <Image source={{uri: character.image}} style={styles.image}/>
            <Text style={styles.name}>{character.name}</Text>
            <Text style={styles.info}>{character.species}</Text> 
            <Button size="small" title="Eliminar" color="red" onPress={onDelete}/>
        </View>

    );

}
