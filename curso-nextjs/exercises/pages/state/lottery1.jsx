import { useState } from "react";
import generateLotteryNumbers from "@/functions/generateLotteryNumbers";

export default function lottery1(){
  
  let [numbers, lotteryNumbers] = useState(0);

  const styleCSS = {
    backgroundColor: "#fff",
    color : "#222",
    height : "100vh",
    display: "flex",
    justifyContent : "center",
    alignItems: "center",
    flexDirection: "column"
  };

  const buttonStyleCSS = {
    width : "100px",
  };

  function lotteryTickets(){
    let result = generateLotteryNumbers();
    lotteryNumbers(result);
  }
 
  return(
    <div style={styleCSS}>
      <h1>Lottery #1</h1>
      <button style={buttonStyleCSS} onClick={lotteryTickets}>Lottery Numbers</button>
      <span>{numbers}</span>
    </div>
  );
}