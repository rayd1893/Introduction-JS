const persona = {
    nombre : 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'Lima',
        zipcode: 2345,
        latitud: 14.0348,
        longitud: 32.42932
    }
};

console.log({ persona }); //console.log({ persona: persona });

const persona2 = { ...persona }; //Copia de un objeto
persona2.nombre = 'Peter';

console.log(persona)
console.log(persona2)