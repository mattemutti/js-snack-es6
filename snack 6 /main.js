/* *SNACK 6*

Creare un array di oggetti di squadre di calcio.

Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

*/

const teams = [
	{
		nome: 'Milan',
		punti: 0,
		falli: 0,
	},
	{
		nome: 'Inter',
		punti: 0,
		falli: 0,
	},
	{
		nome: 'Brescia',
		punti: 0,
		falli: 0,
	},
	{
		nome: 'Macerata',
		punti: 0,
		falli: 0,
	},
	{
		nome: 'Lecce',
		punti: 0,
		falli: 0,
	},
]

console.log(teams);


// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

// funzione per creare un numero random da 0 a 99


function numberRandom() {
	let numbRand = Math.floor( Math.random()*100)
	
	return numbRand
}

const teamRandom = teams.map((team) => {
		
	team.nome = team.nome;
	team.punti = numberRandom();
	team.falli = numberRandom();
	console.log(team);
	
})

/*
setTimeout(function() {

	const teamRandom = teams.map((team) => {
		
		team.nome = team.nome;
		team.punti = numberRandom();
		team.falli = numberRandom();
		console.log(team);
		
	})
	
}, 2000);

*/


// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const newArrayTeams = teams.map((team) => {

	const {nome, falli} = team;

	return {nome, falli};
	

})

console.log(newArrayTeams);
