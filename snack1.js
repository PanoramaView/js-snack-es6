//Snack 1:
var ArrayBici= [
    {
        peso: 10,
        nome: "bici1",
    },
    {
        peso: 11,
        nome: "bici2",
    },
    {
        peso: 12,
        nome: "bici3",
    },
    {
        peso: 13,
        nome: "bici4",
    },
    {
        peso: 14,
        nome: "bici5",
    },
    {
        peso: 15,
        nome: "bici6",
    },
    {
        peso: 16,
        nome: "bici7",
    },
    {
        peso: 17,
        nome: "bici8",
    },
    {
        peso: 18,
        nome: "bici9",
    },
    {
        peso: 19,
        nome: "bici10",
    }
];

function findLighterBike(arrayList){
    let ligherBike;
    for ( let i = 0; i < arrayList.length; i++){
        const {peso, nome} = arrayList[i];
        if( !ligherBike || peso < ligherBike.weight){
            ligherBike = {
                nome,
                peso
            }
        }
    }
    return ligherBike;
}

const LighterBike = findLighterBike(ArrayBici);
console.log(LighterBike);
const {peso, nome} = LighterBike;
console.log(`Bici più leggera è: ${nome}`);
