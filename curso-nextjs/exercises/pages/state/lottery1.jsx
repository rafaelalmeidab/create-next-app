import { useState } from "react";
import generateLotteryNumbers from "@/functions/generateLotteryNumbers";
import DisplayCounter from "@/components/DisplayCounter";

export default function lottery1(){
  let [quantity, setQuantity] = useState(6);
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

  const styleCSSNumbers = {
    display: "flex",
    flexWrap : "wrap",
    justifyContent : "center"
  };

  const buttonStyleCSS = {
    width : "100px"
  };

  function lotteryTickets(quantity){
    let result = generateLotteryNumbers(quantity);
    lotteryNumbers(result);
  }

  function renderNumbers(numbers){
    var result = Object.keys(numbers).map((key) => [numbers[key]]);
    return result.map(
      number => <DisplayCounter key={number} number={number} />
    );
  }
  return(
    <div>
      <div style={styleCSS}>
        <h1>Lottery #1</h1>
        <div style={styleCSSNumbers}>{renderNumbers(numbers)}</div>
        <input style={buttonStyleCSS} type="number" min={6} max={20} value={quantity} onChange={ev => setQuantity(ev.target.value)} />
        <button style={buttonStyleCSS} onClick={() => lotteryTickets(quantity)}>Lottery Numbers</button>
      </div>
    </div>
  );
}