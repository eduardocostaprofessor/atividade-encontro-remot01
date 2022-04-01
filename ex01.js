var readlineSync = require('readline-sync');
// Faça um programa que receba a idade de uma pessoa em anos e
// imprima essa idade em: Meses, Dias, Horas, Minutos.

//entrada
let idade = readlineSync.question('Qual é a sua idade? ');


//processamento
let idadeMeses = idade * 12;
let idadeDias = idade * 365;
let idadeHoras = idadeDias * 24;
let idadeMinutos = idadeHoras * 60;

//saída
console.log("Idade em meses é: " + idadeMeses + " meses");
console.log("Idade em dias é: " + idadeDias + " dias");
console.log("Idade em horas é: " + idadeHoras + " horas");
console.log("Idade em minutos é: " + idadeMinutos + " minutos");