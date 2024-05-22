export default function DisplayCounter(props){

  const styleCSS = {
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    height : "50px",
    width : "50px",
    backgroundColor: "#222",
    borderRadius : "25px",
    color : "#fff",
    fontSize : "2rem",
    margin : "20px"
  };

  return(
    <div style={styleCSS}>{props.number}</div>
  );
}