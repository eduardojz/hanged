class pokemon{
    async getpokemons(id) {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id );
        if (!response.ok) {
            throw new Error ("No se pudo obtener la informacion solicitada")
        }
        const data = await response.json();
        return data
    }
}
export default pokemon;