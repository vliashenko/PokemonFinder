export const fetchPokemonAPI = (name) => {
    return fetch("https://pokeapi.co/api/v2/pokemon/" + name) 
        .then(res => {
            if(res.ok) {
                return res.json()
            } else {
                return Promise.reject(new Error(`No such pokemon with name ${name} :(`))
            }
        })
};
