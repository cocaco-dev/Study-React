// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
import {heroes} from '../data1/heroes.js';


export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

// find?, filter
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );




