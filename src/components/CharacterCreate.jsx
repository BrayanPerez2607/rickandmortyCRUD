import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import styles from "../styles/CharacterCreateStyle";

export default function CharacterEdit({editCharacter}) {
    const [name, setName] = useState('');
    const [especie, setEspecie] = useState('');
    return (
        <View>
            <Text>Editar personaje</Text>
            <TextInput
                placeholder="Nombre del personaje: "
                value={name}
                onChangeText={setName}
                style={styles.inputName}
            />
            <TextInput
                placeholder="Especie del personaje: "
                value={especie}
                onChangeText={setEspecie}
                style={styles.inputEspecie}
            />
            <Button 
                size="small"
                title="Guardar"
                onPress={() => editCharacter(name, especie)}
                style={styles.buttonSave}
            />
        </View>

        
    );
}