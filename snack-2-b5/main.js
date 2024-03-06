/* 

Crea 10 oggetti che rappresentano una zucchina.

Dividi in due array separati le zucchine che misurano meno o più di 15cm.

Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/


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
		misura: 50,
	},
	{
		nome: 'zucch4',
		peso: 8,
		misura: 9,
	},
	{
		nome: 'zucch5',
		peso: 15,
		misura: 20,
	},
	{
		nome: 'zucch6',
		peso: 4,
		misura: 5,
	},
	{
		nome: 'zucch7',
		peso: 9,
		misura: 16,
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

console.log(zucchine);


const zucchineBig = zucchine.filter((zucchina) => {
	if ( zucchina.peso >= 15){
		return zucchina
	}
})

console.log(zucchineBig);

const zucchineSmall = zucchine.filter((zucchina) => {
	if (zucchina.peso < 15){
		return zucchina
	}
})

console.log(zucchineSmall);


let pesoZucchineBig = 0
let pesoZucchineSmall = 0

zucchineBig.forEach(zucchina => {
	pesoZucchineBig = zucchina.peso + pesoZucchineBig
	
	// pesoZucchina += zucchina.peso 	// si può scrivere anche così
	
})

zucchineSmall.forEach(zucchina => {
	pesoZucchineSmall = zucchina.peso + pesoZucchineSmall
	
	// pesoZucchina += zucchina.peso 	// si può scrivere anche così
	
})

console.log(pesoZucchineBig);
console.log(pesoZucchineSmall);