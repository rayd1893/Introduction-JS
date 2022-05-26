const saludar = function (nombre) {
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar4 = () => `Hola mundo`;

console.log(saludar('Rayd'));
console.log(saludar2('Rayd'));
console.log(saludar4());

const getUser = () =>({
    uid: 'ABC123',
    username: 'rayd1893'
});

const user = getUser();
console.log(user);

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC123',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('rayd');
console.log(usuarioActivo)