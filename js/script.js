// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

var button = document.getElementById('scatena');

// creazione array di 100 numeri
var numeri = [];
var numero = 0;

button.addEventListener("click",
  function()
  {
    for (var i = 1; i <101; i++)
    {
      numeri.push(numero +(numero+i));
    }
    console.log(numeri);

    var testostampato = "";
    for (var i = 0; i <100; i++)
    {

      //sostituisco "FizzBUZZ" ai multipli di 3 e 5
       if(numeri[i] % 3 === 0 && numeri[i] % 5 === 0)
       {
         numeri[i]= "FizzBuzz";
       }
        //sostituisco "Fizz" ai multipli di 3
       else if(numeri[i] % 3 === 0)
       {
         numeri[i]= "Fizz";
       }

       //sostituisco "Buzz" ai multipli di 5
        else if(numeri[i] % 5 === 0)
        {
         numeri[i]= "Buzz";
        }
        console.log(numeri[i]);
        testostampato = testostampato + "<li>" + numeri[i] + "</li>";
        document.getElementById('stampa').innerHTML = testostampato;


    }
  }
  );
