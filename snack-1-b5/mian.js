//Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.


const zucchine = [
	{
		nome: 'zucch1',
		peso: 10,
		misura: 10,
	},
	{
		nome: 'zucch2',
		peso: 2,
		misura: 1,
	},
	{
		nome: 'zucch3',
		peso: 5,
		misura: 5,
	},
	{
		nome: 'zucch4',
		peso: 8,
		misura: 9,
	},
	{
		nome: 'zucch5',
		peso: 15,
		misura: 10,
	},
	{
		nome: 'zucch6',
		peso: 4,
		misura: 5,
	},
	{
		nome: 'zucch7',
		peso: 9,
		misura: 10,
	},
	{
		nome: 'zucch8',
		peso: 20,
		misura: 20,
	},
	{
		nome: 'zucch9',
		peso: 17,
		misura: 5,
	},
	{
		nome: 'zucch10',
		peso: 99,
		misura: 42,
	},
]

// console.log(zucchine);


// Calcola quanto pesano tutte le zucchine.



let pesoZucchina = 0
zucchine.forEach(zucchina => {
	pesoZucchina = zucchina.peso + pesoZucchina
	
	// pesoZucchina += zucchina.peso 	// si può scrivere anche così
	
})



// versione più stretta:
/*

zucchine.forEach(zucchina => pesoZucchina += zucchine.peso)

*/

console.log(`Il peso di tutte le zucchine è: ${pesoZucchina}`);