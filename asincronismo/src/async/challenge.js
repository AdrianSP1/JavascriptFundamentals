const fetchData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

const anotherFunction = async (url_api) => {
    try{
        const data= await fetchData(url_api)//primer llamado
        const character= await fetchData(`${API}${data.results[0].id}`);//segundo llamado
        const origin = await fetchData(character.origin.url);//tercer llamado
        console.log(data.info.count);//numero de personajes
        console.log(character.name);//nombre del personaje 1 [0]
        console.log(origin.dimension);//dimension del personaje
    }catch{
        console.error(error)
    }
}


console.log('Before');
anotherFunction(API);
console.log('After')