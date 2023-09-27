// let nome:string;
// let idade:number;
// let sobrenome:string;

// nome = "Mauricio";
// sobrenome = " Lima Costa"
// idade = 25;

// console.log(`nome ${nome} ${sobrenome}, idade ${idade}`);


type TipoArray = (number | "TreinaWeb")[];

let a: TipoArray =[1,2,3,"TreinaWeb"];
let b: TipoArray = ["TreinaWeb","TreinaWeb",4];

console.log(a,b);

type Animal = {
    nome:string;
    idade:number;
}

let cachorro: Animal;

cachorro = {
    nome: "Dog",
    idade:5
}

console.log(cachorro);