import { getHeroeById } from "./08-export_import";

/*
const promesa = new Promise((resolve, reject) => {
    setTimeout( () => {
        const heroe = getHeroeById(2);
        // console.log(heroe);
        resolve(heroe);
    }, 2000);
});

promesa.then((heroe) => {
    console.log('heroe',heroe);
}) */

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const heroe = getHeroeById(id);
            // console.log(heroe);
            if (heroe === undefined){
                reject("No se encontró el heroe")
            }
            else {
            resolve(heroe); }
        }, 2000);
    });
}

getHeroeByIdAsync(5)
    .then( console.log)
    .catch( console.warn)