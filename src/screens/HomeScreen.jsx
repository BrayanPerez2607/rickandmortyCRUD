import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, Image, View, Button } from "react-native";
import { fetchCharacters } from "../api/rickAndMortyApi";
import styles from "../styles/CharacterStyles";
import CharacterListScreen from "./CharacterListScreen";

export default function HomeScreen ({}) {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const loadCharacters = async () => {
        setLoading(true);
        try {
            
            const data = await fetchCharacters();
            setCharacters(data.results);

        } catch (error) {
            
            console.error('Error HomeScreen', error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {
        loadCharacters();
    }, [])

    const deleteCharacter = (id) => {
        setCharacters(characters.filter((c) => c.id !== id));
    };

    return (

        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Rick & Morty</Text>
            {loading ? (
                <ActivityIndicator size='large' color='green'/>
            ):
            <View>
                <View style={{ flexDirection: 'row', gap: 10, marginBottom: 20, justifyContent: 'center' }}>
                    <Button title="Create" color={'blue'} />
                    <Button title="Edit" color={'blue'}/>
                    <CharacterListScreen characters={characters} deleteCharacter={deleteCharacter}/>

                </View>
            </View>
            }
        </ScrollView>

    );

}

