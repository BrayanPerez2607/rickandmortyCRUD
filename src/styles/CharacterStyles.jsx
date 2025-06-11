import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    card: 
    {
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        width: 150,
        padding: 15,
    },

    image: 
    {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10,
    },

    imageButtonRight:
    {
        alignSelf: 'flex-end',
        width: 100,
        height: 100,
        marginRight: 60
    },

    imageButtonLeft:
    {
        alignSelf: 'flex-start',
        width: 100,
        height: 100,
        marginLeft: 60,
    },

    name: 
    {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },

    info: 
    {
        color: '#555',
    },

    characterList: 
    {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 15,
    },

    header:
    {
        textAlign: 'center',
        marginBottom: 5,
        marginTop: 40,
    },

    buttonContainer: 
    {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 60,
    },

});

export default styles;