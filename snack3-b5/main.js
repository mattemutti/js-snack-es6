
// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)


function reverseString(string) {

	let arrayString = string.split(""); // iserisco ogni lettera della parola in un array divisa da ""
	console.log(arrayString);

	arrayString = arrayString.reverse(); // inverto l'array
	console.log(arrayString);

	arrayString = arrayString.join("") // riunisco l'array
	console.log(arrayString);
	

}


reverseString("giovanotto");


// funzione più compatta

function reverseStringCompact(word){

	const wordRev = word.split('').reverse().join('')

}