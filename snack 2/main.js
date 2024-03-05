
 // Snack 2
/* A partire da un array di stringhe, 
crea un secondo array formattando le stringhe del primo array in minuscolo 
e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

*/

const words = ['pippo', 'PLUTO', 'Paperino', 'maGenta', 'unicorNO']


words.forEach(word => {
	console.log(word);

});


const wordFinal = words.map((string) => {
	//return string.toLocaleLowerCase();
	return string[0].toUpperCase() + string.slice(1).toLocaleLowerCase();  
})
console.log(wordFinal);


