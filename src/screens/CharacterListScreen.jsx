import { FlatList, ScrollView } from "react-native";
import CharacterCard from "../components/CharacterCard";
import styles from "../styles/CharacterListStyles";

export default function CharacterListScreen({ characters, deleteCharacter }) {
    return (
        <ScrollView>
            <FlatList
                contentContainerStyle={styles.list}
                data={characters}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <CharacterCard
                     character={item}
                     onDelete={() => deleteCharacter(item.id)} 
                    />
                )}
            />
        </ScrollView>
    )
}