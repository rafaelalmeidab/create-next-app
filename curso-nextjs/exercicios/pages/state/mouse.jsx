import { useState } from "react";

export default function mouse(){
  
  let [x, changeX] = useState(0);
  let [y, changeY] = useState(0);

  const styleCSS = {
    backgroundColor: "#fff",
    color : "#222",
    height : "100vh",
    display: "flex",
    justifyContent : "center",
    alignItems: "center",
    flexDirection: "column"
  };

  function mouseMoving(e){
    changeX(e.clientX);
    changeY(e.clientY);
  }
  
  return(
    <div style={styleCSS} onMouseMove={mouseMoving}>
      <span>Eixo X: {x}</span>
      <span>Eixo Y: {y}</span>
    </div>
  );
}