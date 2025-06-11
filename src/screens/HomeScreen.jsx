import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, Image, View, Button } from "react-native";
import { fetchCharacters } from "../api/rickAndMortyApi";
import styles from "../styles/CharacterStyles";

export default function HomeScreen ({}) {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [mostrarComponente, setMostrarComponente] = useState(false)
    const [characterEdit, setCharacterEdit] = useState(null);
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

    const addCharacter = (character) => {
      setUsers([...characters, {...character, id: Date.now()}])
    }



    // Edit character
    const handleEditCharacter = (character) => {
        setCharacterEdit(character);
        setMostrarComponente(true);
    };

    // Save character
    useEffect(() => {
        if (characterEdit) {
            // Here you would typically send the updated character to your API
            console.log('Character to edit:', characterEdit);
            
            setCharacters(prevCharacters =>
                prevCharacters.map(char =>
                    char.id === characterEdit.id ? { ...char, name, species } : char
                )
            );
            // Reset the edit state after saving
            setCharacterEdit(null);
            setMostrarComponente(false);
        }
    }, [characterEdit]);

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
                    <Button title="Delete" color={'blue'}/>
                </View>
            </View>
            }
        </ScrollView>

    );

}

