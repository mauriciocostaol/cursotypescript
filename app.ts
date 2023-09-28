// let nome:string;
// let idade:number;
// let sobrenome:string;

// nome = "Mauricio";
// sobrenome = " Lima Costa"
// idade = 25;

// console.log(`nome ${nome} ${sobrenome}, idade ${idade}`);


// type TipoArray = (number | "TreinaWeb")[];

// let a: TipoArray =[1,2,3,"TreinaWeb"];
// let b: TipoArray = ["TreinaWeb","TreinaWeb",4];

// console.log(a,b);

// type Animal = {
//     nome:string;
//     idade:number;
// }

// let cachorro: Animal;

// cachorro = {
//     nome: "Dog",
//     idade:5
// }

// console.log(cachorro);

enum produtoStatus{
    
}
function checarProdutoStatus(status:number){
    switch(status){
        case 1:
            console.log("Produto Disponível")
            break;
        case 2:
            console.log("Produto Não Encontrado");
            break;
        case 3:
            console.log("Produto aguardando estoque");
            break;
    }
}

checarProdutoStatus(2);