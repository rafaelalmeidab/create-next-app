function action1(){
  console.log("Action #1");
}

export default function button(){
  function action2(){
    console.log("Action #2");
  }

  function action5(e){
    console.log(e);
  }

  return(
    <div>
      <button onClick={action1}>Click #1</button>
      <button onClick={action2}>Click #2</button>
      <button onClick={function(){
        console.log("Action #3");
      }}>Click #3</button>
      <button onClick={() => console.log("Action #4")}>Click #4</button>
      <button onClick={action5}>Click #5</button>
      <button onClick={e => action5(e.altKey)}>Click #5 v2</button>
      <input type="text" onChange={e => console.log(e.target.value)} />
    </div>
  );
}