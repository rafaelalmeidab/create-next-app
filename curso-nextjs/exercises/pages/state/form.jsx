import { useState } from "react";

export default function form(){
    
  const[formValue, setFormValue] = useState('Initial'); //undefined or null, componente nao controlado

  const styleCSS = {
    display : 'flex',
    flexDirection : 'column'
  };

  function changeInput(){
    setFormValue(formValue + '!');
  }


  return(
    <div style={styleCSS}>
      <span>{formValue}</span>
      <input type="text" value={formValue} onChange={e => setFormValue(e.target.value)} />
      <button onClick={changeInput}>Change</button>
    </div>
  );
}