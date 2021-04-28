//Snack 2:
const arrayCalcio = [
    {
        nome: "team1",
        puntifalli: 0,
        puntisubiti: 0
    },
    {
        nome: "team2",
        puntifalli: 0,
        puntisubiti: 0
    },
    {
        nome: "team3",
        puntifalli: 0,
        puntisubiti: 0
    },
    {
        nome: "team4",
        puntifalli: 0,
        puntisubiti: 0
    },
];

//1
function getRndNum(min, max) {
    return Math.floor(Math.random() * max) + min;
}
arrayCalcio.forEach(x => {
    x.puntifalli = getRndNum(1, 10);
    x.puntisubiti = getRndNum(1, 10);
});
console.log(arrayCalcio);

//2
const donewTeams = (arrayList) => {
    const newTeams = [];
    for (const x of arrayList) {
        const {nome, puntisubiti} = x;
        newTeams.push({
            nome,
            puntisubiti
        })
    }
    return newTeams;
}


const newTeams = donewTeams(arrayCalcio);
console.log(newTeams)