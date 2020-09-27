import initLoad from './init.js';
import home from './home.js';
import jungle from './tiger.js';
import polar from './polar.js';
import ocean from './ocean.js';


const container = document.getElementById('container');

initLoad();


document.getElementById('liHome').addEventListener('click', home);
document.getElementById('liJungle').addEventListener('click', jungle);
document.getElementById('liPolar').addEventListener('click', polar);
document.getElementById('liOcean').addEventListener('click', ocean);

