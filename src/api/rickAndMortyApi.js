export const BASE_URL = 'https://rickandmortyapi.com/api/character/';

export async function fetchCharacters (page = 1, status = '') {
    
    try {

        let url = `${BASE_URL}?page=${page}`;
        if (status) {
            url += `&status=${status}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        return data;

    } catch (error) {
        
        console.error('Error fetching data', error)
        throw error;

    }

}

export async function fetchLocation(url) {
    
    try {
        const response = await fetch(`${url}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        throw error;
    }

}
