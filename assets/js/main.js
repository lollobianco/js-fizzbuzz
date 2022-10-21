 

for (let n = 1; n <= 100; n++){

   if (n % 5 == 0 & n % 3 == 0){

      console.log(`${n} è sia multiplo di 5 che di 3`)

      }else if (n % 5 == 0){
         console.log(`${n} è multiplo di cinque`)
      }else if (n % 3 == 0){
         console.log(`${n} è multiplo di tre`)
      }else{
         console.log(n)
      }
}