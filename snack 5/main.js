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

let biciLighter = bicycles[0].peso;
let biciName;



const bikeLight = bicycles.forEach(bike => {
	
	//console.log(bikeLighter);
	let {name, peso} = bicycles

	if (peso < biciLighter){
		biciLighter = peso
		biciName = name;
	
		
	}
})


console.log(bikeLight);
console.log(`La bici ${biciName} è qualle ceh pesa meno : ${biciLighter}`);




