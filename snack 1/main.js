/*
Snack 1

Crea un array composto da 10 automobili.

Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: 
- nel primo array solo le auto a benzina, 
- nel secondo solo le auto a diesel, 
- nel terzo il resto delle auto.

Infine stampa separatamente i 3 array.

*/


// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: 
// marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

const cars = [
	{
		marca: 'Audi',
		modello: 'A3',
		alimentazione: 'diesel',
	},
	{
		marca: 'Porsche',
		modello: '911 GT3 RS',
		alimentazione: 'benzina',
	},
	{
		marca: 'Lambo',
		modello: 'Aventador',
		alimentazione: 'benzina',
	},
	{
		marca: 'McLaren',
		modello: 'P1',
		alimentazione: 'gpl',
	},
	{
		marca: 'Audi',
		modello: 'A8',
		alimentazione: 'diesel',
	},
	{
		marca: 'Tesla',
		modello: 'aaa',
		alimentazione: 'elettrica',
	},
	{
		marca: 'Citroen',
		modello: 'C3',
		alimentazione: 'gpl',
	},
	{
		marca: 'Ford',
		modello: 'GT',
		alimentazione: 'benzina',
	},
	{
		marca: 'Fiat',
		modello: 'punto',
		alimentazione: 'diesel',
	},
	{
		marca: 'Fiat',
		modello: 'Panda',
		alimentazione: 'elettrica',
	},
	
]

//console.log(car);

//Dividi le automobili in 3 array separati: 

/*
cars.forEach(car => {
	console.log(car.alimentazione);
})
*/ 

//- nel primo array solo le auto a benzina, 
const carsBenzina = cars.filter(car => car.alimentazione === 'benzina')
console.log(carsBenzina);

//- nel secondo solo le auto a diesel, 
const carsDiesel = cars.filter(car => car.alimentazione === 'diesel')
console.log(carsDiesel);


//- nel terzo il resto delle auto.
const ecoCars = cars.filter(car => car.alimentazione !== 'benzina' && car.alimentazione !== 'diesel')
console.log(ecoCars);

