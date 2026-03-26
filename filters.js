const filter = document.querySelector('#filter-location') //
const mensaje = document.querySelector('#filter-selected-value') 

//escucha el evento, lo guarda en una variable
filter.addEventListener('change', function (){
  const jobs = document.querySelectorAll('.job-listing-card')
  const selectedValue = filter.value
  //si selected no esta vacio, entonces muestrame su contenido
  //de otra forma no muestres nada
  if (selectedValue){
    mensaje.textContent = `Haz seleccionado: ${selectedValue}`
  } else {
    mensaje.textContent = ''
  }
  //recorre la lista de los valores de data-modalidad
  //y guarda el dato que tiene data-modalidad
  //despues lo compara y dice si selectedValue 
  //no lo muestres si no tiene modalidad
  jobs.forEach(job =>{

    const modalidad = job.getAttribute('data-modalidad')
    //si el filtro no tiene nada muestralos todos, pero si tiene modalidad muestra esos
    const isShown = selectedValue === '' || selectedValue === modalidad

    job.classList.toggle('is-hidden', !isShown)
  })
})