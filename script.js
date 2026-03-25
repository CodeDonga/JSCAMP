//esto que viene cuando le haces click a un boton, el boton pasa el evento al elemento padre y este al padre y asi sube. Va de mas abajo hacia arriba, como el boton esta dentro del article el boton le pasa el evento al article. Si le das click al boton, le das click al article, si le da click al article le da click al jobs listin y asi despues al job section. 
const jobsListingSection = document.querySelector('.jobs-listings') || document.querySelector('.company-description')

jobsListingSection.addEventListener('click', function(event){
  const element = event.target

  if (element.classList.contains('button-apply-job')){
    element.textContent = 'Aplicado!'
    element.classList.add('is-applied')
    element.disabled = true
  }

  if (element.classList.contains('button-apply-company')){
    element.textContent = 'FUNKA!'
    element.classList.add('is-applied')
    element.disabled = true
  }
     
})


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

const container = document.querySelector('.jobs-listings')

fetch("./data.json")//cuando llegue la pizza
  .then((response) => { //primero abrire la puerta
    return response.json();
  })
  .then((jobs) => {
    jobs.forEach(job => {
      const article = document.createElement('article')
      article.className = 'job-listing-card'
      //la modalidad, nivel y technology lo guardamos en dataset
      article.dataset.modalidad = job.data.modalidad
      article.dataset.nivel = job.data.nivel
      article.dataset.technology = job.data.technology

      article.innerHTML = `<div>
              <h3>${job.titulo}</h3>
              <small>${job.empresa} | ${job.ubicacion}</small>
              <p>${job.descripcion}</p>
            </div>
            <button class="button-apply-job">Aplicar</button>`

            container.appendChild(article)
    })

  });

