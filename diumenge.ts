// Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres en un JSON.

interface Numbers {
    num1: number;
    num2: number;
    num3: number;
    num4: number;
  }

import data from './diumenge.json';

function calculate() {
    const numbersArray = data as number[];
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i];
    }
    console.log(sum);
}


/*    const rest = operands.num1 - operands.num2;
    const multiply = operands.num1 * operands.num2;
  
    //return sum + rest + multiply;
    return sum;
}

const result = calculate({ num1: 5, num2: 3, num3: 0, num4: 0 });
console.log(result);
*/

//Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned Habilita l'autorització per executar
//ts-node players.ts
// AIXO AQUI NO VA npx tsc callback_hell.ts