import React,{Fragment} from "react";


const detalleP=()=>{

const nombre = "Moto G 5G Plus";
const descripcion = "Dual SIM 64 GB surfing blue 4 GB RAM";
const precio = 479.999;
const sku = "XT1965-2";
const cantd = 50;

return (
    <Fragment>
<h3>Nombre :{nombre}</h3> 
<h3>Descripción :{descripcion}</h3>
<h3>Precio :${precio}</h3>
<h3>SKU :{sku}</h3>
<h3>Cantidad Disponible :{cantd}</h3>
</Fragment>
);
}

export default detalleP;