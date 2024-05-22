import { useState } from "react";
import DisplayCounter from "@/components/DisplayCounter";

export default function counter(){
  
  let [x, changeX] = useState(0);

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

  function clickCounting(e){
    let result = e.target.id == '1' ? ++x : --x;
    changeX(result);
  }
  
  return(
    <div style={styleCSS}>
      <h1>Counter</h1>
      <button id='1' style={buttonStyleCSS} onClick={clickCounting}>+</button>
      <button id='2' style={buttonStyleCSS} onClick={clickCounting}>-</button>
      <DisplayCounter number={x}/>
    </div>
  );  
}