const  mostrarCiudades = ciudades =>{
    const listadoCiudades=[];
   ciudades.forEach(ciudad =>{
     const htmlCiudad= `<h4>${ciudad.nombre}</h4>
       <p data-id="2643743"><span>9</span>°<img src="http://openweathermap.org/img/w/09d.png" alt=""></p>
       <p>${ciudad.descripcion}</p>`;
       console.log(htmlCiudad);
       listadoCiudades.push(htmlCiudad);
   });
  const contenedorCiudades =document.querySelector('.row.marketing');
  contenedorCiudades.innerHTML=listadoCiudades.join('');
};
export default mostrarCiudades;
