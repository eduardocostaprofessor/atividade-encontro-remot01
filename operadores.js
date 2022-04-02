/*
    Operadores aritméticos
    + soma, concatena/junta (ação dupla)
    - subtrai
    * multiplica
    / divide

    Operadores Lógicos - retornam um valor booleano (true/false)
    > Maior que 5 > 5
    < Menor que
    >= Maior ou igual a
    <= Menor ou igual a
    != diferente de 
    == igual a 
    === identico a (igual e do mesmo tipo de dado)
    !== não identico a (deferente: tipo e valor)
*/


let numero1 = 50;
let numero2 = "20";

// numero2 = parseInt(numero2);

console.log("******************* OPERADORES ARITMÉTICAS ****************");
console.log( numero1 + numero2 );//soma
console.log(numero1 - numero2);//subtração
console.log(numero1 * numero2);//multiplicação
console.log(numero1 / numero2);//divisão

console.log("******************* OPERADORES RELACIONAIS ****************");
console.log(numero1 > numero2);
console.log(numero1 < numero2);
console.log(numero1 >= numero2);
console.log(numero1 <= numero2);
console.log(numero1 == numero2);
console.log(numero1 === numero2);