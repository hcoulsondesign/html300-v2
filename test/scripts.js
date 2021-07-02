const catForm = document.querySelector('#cats');

catForm.addEventListener('submit',function(event){
	event.preventDefault()

	//Handle input
  const userInput = document.querySelector('#cats .input').value
  const userNumber = parseInt(userInput)
  console.log(userNumber)

    //Handle output
	if(!isNaN(userNumber)){
  	const text = document.createTextNode(`${userNumber * 10} cats? Wow!`)
    const p = document.createElement('p')
    p.appendChild(text)
    this.appendChild(p)
    this.classList.add('submitted')
  }


})
