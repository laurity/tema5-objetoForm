/**
 * @author Laura López Alonso (Web Developer Student)
 */

//Metodo 1: acceder a los formularios

const formulario = document.getElementById('contactar');

//Metodo 2: acceder a los formularios

const formularios = document.getElementsByTagName('form');
const primerFormulario = formularios[0];
const primerFormulario2 = formularios[1];

// Otra posibilidad interesante que te permite el método anterior, es la de buscar con un elemento padre, por ejemplo: 
/*
const menu = document.getElementById('menulateral');  // Accedemos al elemento padre

const formulariosMenuLateral = menu.getElementsByTagName('form'); // Buscamos los formularios dentro del elemento padre

const primerFormularioMenuLateral = formulariosMenuLateral[0]; // Accedemos al primer formulario
const segundoFormularioMenuLateral = formulariosMenuLateral[1]; // Accedemos al segundo formulario
*/
// la referencia a todos los formularios del documento

const misForumlarios = document.forms; // Accedemos a todos los formularios del documento

const miPrimerFormulario = misForumlarios[0]; // Accedemos al primer formulario
  
const miPrimerFormulario2 = document.forms[0]; // Accedemos al primer formulario

const miPrimerFormulario3 = misForumlarios["contactar"]; // Accedemos al primer formulario por su id