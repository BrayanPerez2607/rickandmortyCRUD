import React, { use, useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, Image, View, Button } from "react-native";
import { fetchCharacters } from "../api/rickAndMortyApi";
import CharacterList from "../components/CharacterList";
import styles from "../styles/CharacterStyles";

export default function HomeScreen () {

    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [statusFilter, setStatusFilter] = useState('');

    const loadCharacters = async (pageToLoad = 1) => {

        setLoading(true);

        try {
            
            const data = await fetchCharacters(pageToLoad, statusFilter);
            setCharacters(data.results);
            setTotalPages(data.info.pages);

        } catch (error) {
            
            console.error('Error HomeScreen', error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {
        loadCharacters(page);
    }, [page, statusFilter])

    const handleNext = () => {

        if (page < totalPages) {
            setPage(prev => prev + 1)
        }

    };

    const handlePrevious = () => {

        if (page > 1) {
            setPage(prev => prev - 1)
        }

    };

    return (

        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Rick & Morty</Text>
            {loading ? (
                <ActivityIndicator size='large' color='green'/>
            ):
            <View>
                <View style={{ flexDirection: 'row', gap: 10, marginBottom: 20, justifyContent: 'center' }}>
                    <Button title="All" onPress={() => { setStatusFilter(''); setPage(1); }} color={statusFilter === '' ? 'gray' : 'blue'} />
                    <Button title="Alive" onPress={() => { setStatusFilter('alive'); setPage(1); }} color={statusFilter === 'alive' ? 'gray' : 'blue'}/>
                    <Button title="Dead" onPress={() => { setStatusFilter('dead'); setPage(1); }} color={statusFilter === 'dead' ? 'gray' : 'blue'}/>
                    <Button title="Unknown" onPress={() => { setStatusFilter('unknown'); setPage(1); }} color={statusFilter === 'unknown' ? 'gray' : 'blue'}/>
                </View>
            <CharacterList characters={characters}/>
            </View>
            }
                <Text style={styles.header}>Page: {page}</Text>
                <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => handlePrevious()}>
                    <Image
                        style={styles.imageButtonLeft}
                        source={require('../../assets/left-arrow.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNext()}>
                    <Image
                        style={styles.imageButtonRight}
                        source={require('../../assets/right-arrow.png')}
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>

    );

}

