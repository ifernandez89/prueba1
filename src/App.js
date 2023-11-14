import React from "react";
import './App.css';
//import PrimerComponente from "./Components/PrimerComponente";
//import Contador from "./Components/Contador";
//import DetalleProducto from "./Components/DetalleProducto";
import Saludo from "./Components/Saludo";

function App() {

  var boton = document.getElementById("boton");
  var p=document.getElementById("saludo");

  boton.addEventListener('click',function(){
      console.log('Me diste click');
      p.style.color="red";
  })
  var boton = document.getElementById("boton");
  boton.addEventListener('mouseover',function(){
      console.log('He detectado el ratón');
      p.style.backgroundColor="yellow";
  })
  boton.addEventListener('mouseout',function(){
      console.log('Adiós ratón');
      p.style.backgroundColor="blue";
  })

  return (
    <div className="App">
      <Saludo/>
    </div>
  );
}

export default App;
