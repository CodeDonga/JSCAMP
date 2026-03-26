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