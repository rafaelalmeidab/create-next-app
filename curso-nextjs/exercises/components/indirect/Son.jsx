export default function Son(props){
  return(
    <div>
      <h1>Son Indirect</h1>
      <button onClick={props.fn}>Talk to Father #1</button>
      <button onClick={() => props.fn("Talking to Father #2", "Testing second parameter!")}>Talk to Father #2</button>
    </div>
  );
}