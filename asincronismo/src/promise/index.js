//ECMAScript 6
const somethingWillHappen= () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Heeeeeeey!');
        } else{
            reject('Ohhhhhhh!!!');
        }
    });
};

somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err));

const somethingWillHappen2 = () =>{
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('Se cayoo el sistemaaa')
            reject(error);
        }

    });
}

somethingWillHappen2()
.then(response=> console.log(response))
.catch(err=> console.error(err));


Promise.all([somethingWillHappen(),somethingWillHappen2()])
   .then(response =>{//Promise.all regresa las dos opciones en un array
       console.log('Array of results', response);
   })
   .catch(err => {
       console.error(err);
   })

