import { useState } from "react";
import { View, TextInput, Button } from "react-native";

export default function CharacterDetailScreen({addUser}) {
    
    const[name, setName] = useState('');
    const[spice, setSpice] = useState('');

    const handleSubmit = () => {

        const characterData = {
            id: Date.now(),
            name, 
            spice,
        }

        addCharacter(characterData);
        setName('')
        setSpice('')

    }

    return (
 
        <View>
            <TextInput
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                placeholder="Spice"
                value={spice}
                onChangeText={setSpice}
            />
            <Button title="+" onPress={handleSubmit}/>
        </View>
    )
}