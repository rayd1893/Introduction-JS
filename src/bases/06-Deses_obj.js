const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const {nombre, clave, edad } = persona;

console.log(nombre);

const uContext = ({clave,nombre, edad, rango='Capitán'}) =>(
    {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.43443,
            lng: 72.99283
        }
    }
)

const avenger = uContext(persona)
const {nombreClave, anios, latlng:{lat, lng}} = avenger
console.log(nombreClave, anios);
console.log(lat, lng);