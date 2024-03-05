/*
SNACK 4

Crea un array di oggetti che rappresentano delle persone.

Ogni persona ha un nome, un cognome e un’età.

Crea quindi un nuovo array inserendo, 

per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/


const persons = [
	{
		nome: 'Matteo',
		cognome: 'Mutti',
		eta: 21,
	},
	{
		nome: 'Giovanni',
		cognome: 'Lazza',
		eta: 28,
	},
	{
		nome: 'Alessandro',
		cognome: 'Aleotti',
		eta: 14,
	},
	{
		nome: 'Rebecca',
		cognome: 'Consoli',
		eta: 17,
	},
	{
		nome: 'Sonia',
		cognome: 'Sorsoli',
		eta: 29,
	},
	{
		nome: 'Alice',
		cognome: 'Mutti',
		eta: 40,
	},
]






 const adults = persons.map((numero) => {
	if (numero.eta >= 18) {
		return (`Ciao io sono ${numero.nome} ${numero.cognome} e posso guidare perché sono maggiorenne, ho ${numero.eta} anni.`)
		//console.log(`Ciao io sono ${numero.nome} ${numero.cognome} e posso guidare perche sono maggiorenne, ho ${numero.eta} anni.`);
		//return adults.push(`Ciao io sono ${numero.nome} ${numero.cognome} e posso guidare perche sono maggiorenne, ho ${numero.eta} anni.`);
	}
	return (`Ciao io sono ${numero.nome} ${numero.cognome} e non posso guidare perché sono minorenne, ho ${numero.eta} anni.`)
	
})


console.log(adults);
//console.log(`Ciao io sono ${numero.nome} ${numero.cognome} e posso guidare perche sono maggiorenne, ho ${numero.eta} anni.`);