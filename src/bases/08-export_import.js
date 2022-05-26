import heroes,{ owners } from "../data/heroes";


// console.log(owners);

export const getHeroeById = (id) => heroes.find( heroe => heroe.id === id);

// console.log(getHeroeById(3));

export const getHeroesByOwner = (owner) => heroes.filter(heroes_filter => heroes_filter.owner.toLowerCase() === owner.toLowerCase());
// console.log(getHeroesByOwner('MaRvel'));