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