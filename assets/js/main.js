 

for (let n = 1; n <= 100; n++){

   const boxesContainer = document.getElementById("boxesContainer");
   const boxFizzBuzz= `<div class="d-flex align-items-center justify-content-center box fizzBuzz">FizzBuzz</div>`;
   const boxBuzz = `<div class="d-flex align-items-center justify-content-center box buzz">Buzz</div>`;
   const boxFizz = `<div class="d-flex align-items-center justify-content-center box fizz">Fizz</div>`;
   const box = `<div class="d-flex align-items-center justify-content-center box normal">${n}</div>`;

   if (n % 5 == 0 & n % 3 == 0){

      console.log(`${n} è sia multiplo di 5 che di 3`)
      boxesContainer.innerHTML += boxFizzBuzz;

      }else if (n % 5 == 0){
         console.log(`${n} è multiplo di cinque`)         
         boxesContainer.innerHTML += boxBuzz;
      }else if (n % 3 == 0){
         console.log(`${n} è multiplo di tre`)         
         boxesContainer.innerHTML += boxFizz;
      }else{
         console.log(n)      
         boxesContainer.innerHTML += box;
      }



}