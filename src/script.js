// Seu código vem aqui

function calculateSalary(fixedSalary, sales) {
   let comission;

   if (sales > 1200) {
      comission = 1200 * 0.03 + (sales - 1200) * 0.05;
   } else {
      comission = sales * 0.03
   }

   return fixedSalary + comission;
}

function calculateStock(currentStock, maxStock, minStock) {
   let medStock = (maxStock + minStock) / 2;

   return (currentStock >= medStock) ? 'Não efetuar compra' : 'Efetuar compra';
}

function calculateAge(birthdateYear, currentYear) {
   let years  = currentYear - birthdateYear;
   let months = years * 12;
   let days   = years * 365;
   let weeks  = years * 52;

   return `{ ${years} anos = ${months} meses = ${days} dias = ${weeks} semanas }`;
}

function getDiagonal(arr) {
   let arrDiag = [];

   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
         if (i === j) {
            arrDiag.push(arr[i][j]);
         }
      }
   }

   return arrDiag;
}

function cashMachine(totalValue) {
   let notes;

   function calculeNotesNumber(number) {
      if (totalValue >= number) {
         notes = Math.trunc(totalValue / number);
         console.log(`${notes} nota(s) de R$ ${number}`);
         totalValue -= (notes * number);
      }
   }

   console.log('======================================')
   console.log(`DIGITE O VALOR DO SAQUE: R$ ${totalValue}`)
   console.log('======================================\n')
   console.log('Dinheiro retirado:\n')

   calculeNotesNumber(100);
   calculeNotesNumber(50);
   calculeNotesNumber(20);
   calculeNotesNumber(10);
   calculeNotesNumber(5);
   calculeNotesNumber(2);
   calculeNotesNumber(1);
}