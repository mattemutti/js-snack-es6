/*SNACK 3

Crea un array di oggetti che rappresentano degli animali.

Ogni animale ha un nome, una famiglia e una classe.

Crea un nuovo array con la lista dei mammiferi.
*/


const animali = [
	{
		nome: 'leone',
		famiglia: 'felidi',
		classe: 'mammiferi',
	},
	{
		nome: 'cane',
		famiglia: 'canidi',
		classe: 'mammiferi',
	},
	{
		nome: 'gallina',
		famiglia: 'fasianidi',
		classe: 'uccelli',
	},
	{
		nome: 'giaguaro',
		famiglia: 'felidi',
		classe: 'mammiferi',
	},
	{
		nome: 'basenji',
		famiglia: 'canidi',
		classe: 'mammiferi',
	},
	{
		nome: 'pappagallo',
		famiglia: 'fasianidi',
		classe: 'uccelli',
	},
]



// seleziono tutti i mammiferi

const animaliMammiferi = animali.filter(animale => animale.classe === 'mammiferi')
console.log(animaliMammiferi);



// prova
/*
const animaliFelidi = animali.filter(animale => animale.famiglia === 'felidi')
console.log(animaliFelidi);
*/
