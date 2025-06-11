export const BASE_URL = 'https://rickandmortyapi.com/api/character?page=1';

export async function fetchCharacters () {
    
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        return data;

    } catch (error) {
        
        console.error('Error fetching data', error)
        throw error;

    }

}

