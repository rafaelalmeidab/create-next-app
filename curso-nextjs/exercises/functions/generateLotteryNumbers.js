export default function generateLotteryNumbers(counter = 6){
  if(counter < 6 && counter > 60){
    throw "Invalid quantity!";
  }

  let result = [];
  while(result.length < counter){
    let number = parseInt(Math.random() * 60) + 1;
    if(result.includes(number) == false && number !=0){
      result.push(number);
    } 
  }
  
  result.sort((a, b) => a - b);
  
  return result;
}