const id= '5b0d0695f2285768e565'
const clientSecret= '3e5cc746cac7df8a3f0e90629f09e1d86500f03e'


const getData = async(e)=>{
    const url =`http://api.github.com/users/${input.value}/repos?client_id=${id}&client_secret=${clientSecret}`
    e.preventDefault()
    input.value=''
    const result = await fetch(url)
    const data = await result.json()
    // console.log(data)
    if(data.length >1) {
        const gitHubResult = document.querySelector('#gitHubSuchergebnis')
        gitHubResult.textContent=''
        data.map(x => {
            gitHubResult.innerHTML += `
            <div class="h-100 p-5 text-white bg-dark rounded-3 m-3">
            <h2 class="text-danger">${x.name}</h2>
            <p>${x.description}</p>
            <a href=${x.clone_url}><button class="btn btn-outline-light" type="button">Example button</button></a>
            `
        })
    }
    /* gitHubResult.textContent='' */
}

// HTML-Select DOM
const input=document.querySelector("#demo")
const btn=document.querySelector("#inputbutton")
btn.addEventListener('click', getData)
//console.log(input.value)