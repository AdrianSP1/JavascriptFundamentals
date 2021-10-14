const fetchData = require('../utils/fetchData')
const API= 'https://rickandmortyapi.com/api/character/';
//``
fetchData(API)
   .then(data=>{// primer llamado a la API para que traiga la cantidad de personajes y el elemento[0]
       console.log(data.info.count);
       return fetchData(`${API}${data.results[0].id}`)
   })
   .then(data =>{//segundo llamado obtiene el nombre del personaje
       console.log(data.name)
       return fetchData(data.origin.url)
   })
   .then(data => {//tercer llamado obtiene la dimension del personaje
       console.log(data.dimension)
   })
   .catch(err=> console.error(err)) //catch permite capturar el error