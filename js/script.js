$("#shoot").click(function(){
    let randomNumber = Math.random();
    console.log(randomNumber);
var computerchoice = "";
if (randomNumber >= 0.0 && randomNumber <= 0.33)
   { 
        computerchoice = "rock";
   } 
else if(randomNumber >0.33 && randomNumber <=0.66)
   {
       computerchoice = "paper";
   }

else if (randomNumber >0.66 && randomNumber <=1.0)
   {
      computerchoice = "scissor";
    }
console.log(computerchoice);

});
