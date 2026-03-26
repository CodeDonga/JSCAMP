//elemento que va poder heredar propiedades, metodos de los elementos html
class DevJobsAvatar extends HTMLElement {

    constructor() {
        super(); //llamar al constructur de HRMLElement
        this.attachShadow({ mode: 'open'}) //es como una arbol de elementos html dentro del componente
    }
    
    createUrl(service, username){
        return `https://unavatar.io/${service}/${username}`
    }

    //desde el render podemos recuperar elementos
    render() {

        const service = this.getAttribute('service') ?? 'github'
        const username = this.getAttribute('username') ?? 'CodeDonga'
        const size = this.getAttribute('size') ?? '40'

        const url = this.createUrl(service, username)

        this.shadowRoot.innerHTML = `
        <style>
            img{
                border:10px solid red
                width: ${size}px;
                height: ${size}px;
                border-radius: 9999px
            }
        </style>
                <img src= "${url}"
                alt="avatar de Camilo" 
                class="avatar" />`
    }
    
    connectedCallback(){
        this.render()
    }
    
}



customElements.define('devjobs-avatar', DevJobsAvatar)// el elemento devjobs-avatar va usar DevJobsAvatar