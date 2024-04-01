let num = 1;

function car(num) {
    if (num == 1){
        return "Audi";
      }
      else if (num == 2){
        return "Mercedes";
      }
      else if (num == 3){
        return "BMW";
      }
      else if (num == 4){
        return "Porsche";
      }
      else {
        return "Type only numbers 1 to 4!"
      }
}

console.log(car(num));