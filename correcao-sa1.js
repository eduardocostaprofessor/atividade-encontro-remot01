// Dada a capacidade de cada caixa, caso a lista de peças seja superior a 2, imprima uma mensagem informando não ter capacidade suficiente.

// Se a peça possuir um peso superior a 100gramas, pode cadastrar.

// Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.

let listaPecas = ["Computador", "Mouse", "Teclado"];//caixa/lista

let nomePeca = "PC";
let pesoPeca = 350;


// SOLUÇÃO 1
if(listaPecas.length >= 10){//Não tem espaço na lista
    console.log("Não pode mais cadastrar peças. Limite de 2 atingido");
} else {//tem espaço na lista para cadastrar

    if(pesoPeca >= 100){
        console.log("A peça possui mais de 100g e pode ser cadastrada");
        
        if (nomePeca.length < 3) {
            console.log("Atenção, o nome da peça tem que ter mais de 3 caracteres");
        }
    }
}



// SOLUÇÃO 2

if(listaPecas.length >= 10){//Não tem espaço na lista
    console.log("Não pode mais cadastrar peças. Limite de 2 atingido");
}

if(pesoPeca >= 100){
    console.log("A peça possui mais de 100g e pode ser cadastrada");
}


if (nomePeca.length < 3) {
    console.log("Atenção, o nome da peça tem que ter mais de 3 caracteres");
}
