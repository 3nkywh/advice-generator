function getAdvice(){
  const urlAPI = new Request('https://api.adviceslip.com/advice')

  fetch(urlAPI, {cache: 'no-cache'})
    .then(response => {
      if(!response.ok) throw new Error(`Fallo la peticion status:${response.status}`)
      else return response.json()
    })
    .then(response => {
      const identifier = document.querySelector('.main__identifier')
      const advice = document.querySelector('.main__advice')
      
      identifier.textContent = `ADVICE #${response.slip.id}`
      advice.textContent = `"${response.slip.advice}"`
    })
    .catch(e => console.log(`Error: ${e}`))
}

const button = document.querySelector('.main__button')
button.addEventListener('click', getAdvice)

getAdvice()
