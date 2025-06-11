import React from "react";
import CharacterCard from "./CharacterCard";
import styles from "../styles/CharacterStyles";
import { View } from "react-native";

export default function CharacterList ({characters}) {

    return (

        <View style={styles.characterList}>
            {characters.map(character => (
                <CharacterCard key={character.id} character={character}/>
            ))}
        </View>

    );

}