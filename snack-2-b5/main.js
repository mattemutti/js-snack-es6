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

// filtro le zucchine maggiori di 15 cm in un array
const zucchineBig = zucchine.filter((zucchina) => {
	if ( zucchina.peso >= 15){
		return zucchina
	}
})

console.log(zucchineBig);


// filtro le zucchine minori di 15 cm in un altro array
const zucchineSmall = zucchine.filter((zucchina) => {
	if (zucchina.peso < 15){
		return zucchina
	}
})

console.log(zucchineSmall);


// inizializzo le variabili per il conteggio
let pesoZucchineBig = 0
let pesoZucchineSmall = 0


// calcolo il peso delle zucchine maggiori di 15
zucchineBig.forEach(zucchina => {
	pesoZucchineBig = zucchina.peso + pesoZucchineBig
	
})

// calcolo il peso delle zucchine minori di 15
zucchineSmall.forEach(zucchina => {
	pesoZucchineSmall = zucchina.peso + pesoZucchineSmall
	
})


// mando in console il risultato
console.log(`Le zucchine più lunghe di 15 cm pesano ${pesoZucchineBig}`);
console.log(`Le zucchine più corte di 15 cm pesano ${pesoZucchineSmall}`);