const personajes = ['Vegeta', 'Gokú', 'Trunks'];
const [p1] = personajes
const [,p2] = personajes

console.log(p1)
console.log(p2)

const retornaArreglo = () => (
    ['ABC', 123]
)

const [letra, numero] = retornaArreglo();
console.log(letra, numero)

const uState = (valor) => {
    return [valor, () => { console.log('Hola mundo')}];
}

const [nombre, setNombre] = uState('Gokú');
console.log(nombre);
setNombre();