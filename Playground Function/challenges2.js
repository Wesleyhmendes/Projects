// Desafio 11 - Crie a função generatePhoneNumber

let generatePhoneNumber = (numeros) => {

  if (numeros.length === 11) {

      let zero = 0;
      let um = 0;
      let dois = 0;
      let tres = 0;
      let quatro = 0;
      let cinco = 0;
      let seis = 0;
      let sete = 0;
      let oito = 0;
      let nove = 0;

      for (let index = 0; index < numeros.length; index += 1) {

          if (numeros[index] >= 0 && numeros[index] <= 9) {

              if (numeros[index] === 0) {
                  zero += 1;
              } else if (numeros[index] === 1) {
                  um += 1;
              } else if (numeros[index] === 2) {
                  dois += 1;
              } else if (numeros[index] === 3) {
                  tres += 1;
              } else if (numeros[index] === 4) {
                  quatro += 1;
              } else if (numeros[index] === 5) {
                  cinco += 1;
              } else if (numeros[index] === 6) {
                  seis += 1
              } else if (numeros[index] === 7) {
                  sete += 1;
              } else if (numeros[index] === 8) {
                  oito += 1;
              } else if (numeros[index] === 9) {
                  nove += 1;
              } else { /* nada acontece */}
          } else {
              return 'não é possível gerar um número de telefone com esses valores';
          }
      }
      if (zero >= 3 || um >= 3 || dois >= 3 || tres >= 3 || quatro >= 3 || cinco >= 3 || seis >= 3 || sete >= 3 || oito >= 3 || nove >= 3) {

          return 'não é possível gerar um número de telefone com esses valores';

      } else {
          return `(${numeros[0]}${numeros[1]}) ${numeros[2]}${numeros[3]}${numeros[4]}${numeros[5]}${numeros[6]}-${numeros[7]}${numeros[8]}${numeros[9]}${numeros[10]}`;
      }


  } else {
      return 'Array com tamanho incorreto.';
  }
}
// Desafio 12 -  Crie a função triangleCheck

let triangleCheck = (lineA, lineB, lineC) => {
    if(lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
        if( lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)) {
            return true;
        }
    } else {
        return false;
    }
}
// Desafio 13 - Crie a função hydrate
let hydrate = string => {
    let quantidade = string.match(/\d+/g).map(Number);
    let soma = 0;

    for (i = 0; i < quantidade.length; i += 1) {
        soma += quantidade[i];
    }

    if(soma > 1) {
        return `${soma} copos de água`;
    } else {
        return `${soma} copo de água`;
    }
}
/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => { }),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => { }),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => { }),
};
