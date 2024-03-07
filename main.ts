async function fetchdata() {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character")
        if (!response.ok) {
            throw new Error ("no se encontraron los datos")
        }
        const data = await response.json()
        console.log(data )
    } catch (error) {
        console.error("hubo un error de datos", error)
    }

    
}
fetchdata();