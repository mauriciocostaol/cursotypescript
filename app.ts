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

// enum produtoStatus{
//     Ativo = 1,
//     Inativo = 2,
//     Indisponível = 3
// }
// function checarProdutoStatus(status:number){
//     switch(status){
//         case produtoStatus.Ativo:
//             console.log("Produto Disponível")
//             break;
//         case produtoStatus.Inativo:
//             console.log("Produto Não Encontrado");
//             break;
//         case produtoStatus.Indisponível:
//             console.log("Produto aguardando estoque");
//             break;
//     }
// }

// checarProdutoStatus(produtoStatus.Ativo);


interface IAnimal{
    nome: string;
    idade:number;
    vivo: boolean;

    nascer(): void

    crescer():void

    morrer():void
}



class Animal implements IAnimal{
    readonly nome: string;
    idade:number;
    vivo:boolean;

    constructor(nome:string,){
        this.nome = nome;
        this.idade = 0
        this.vivo = false;
    }
    nascer() {
        this.vivo = true;

        return(`O ${this.nome} nasceu!!`)
    };

    crescer(){
        this.idade++;
        return console.log(`O ${this.nome} cresceu! Ele está com ${this.idade} anos`)
    };
    morrer() {
        this.vivo = false;
        this.idade = 0;
        return console.log(`O ${this.nome} morreu`)
    };
    
}

let cachorro = new Animal("Rex");

cachorro.nascer();
cachorro.crescer();
cachorro.morrer();

let gato = new Animal("Stray");

gato.nascer();
gato.crescer();
gato.morrer();



console.log(cachorro.nome);