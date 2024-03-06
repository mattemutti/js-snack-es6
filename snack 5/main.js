/* 
*SNACK 5*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/


const bicycles = [
	{
		nome: 'Carrera',
		peso: 200,
	},
	{
		nome: 'Bianchi',
		peso: 150,
	},
	{
		nome: 'Scott',
		peso: 180,
	},
	{
		nome: 'Oneal',
		peso: 120,
	},
	{
		nome: 'Sanat Cruz',
		peso: 175,
	},
	{
		nome: 'Specialized',
		peso: 250,
	},
	{
		nome: 'Giant',
		peso: 220,
	},
	{
		nome: 'Trek',
		peso: 250,
	},
	{
		nome: 'Gt',
		peso: 280,
	},
	{
		nome: 'Bike',
		peso: 135,
	},
]

console.log(bicycles);


// Stampare in console la bici con peso minore utilizzando destructuring e template literal

let bikeLighter = bicycles[0].peso
console.log(bikeLighter);


const bikeLight = bicycles.filter((bike) => {
	
	console.log(bikeLighter);
	
	if (bike.peso < bikeLighter){
		bikeLighter = bike.peso
		
		return bike 
	}
})

console.log(bikeLight);




