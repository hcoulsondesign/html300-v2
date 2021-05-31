//CUPID CALCULATOR
//Initialize phone array and make it a string
let phoneArr = [867,5309]
const phone7 = phoneArr.join('-')
console.log(phone7)

const phoneForm = document.querySelector('#phone')

//Add event listener for when user submits form
phoneForm.addEventListener('submit',function(event){
	event.preventDefault()

  //Handle user input for 'Phone'
  const phoneInput = document.querySelector('#phone .input').value
  const areaCode = parseInt(phoneInput)
  console.log(areaCode)

  //Handle output for 'Phone'
  if(!isNaN(areaCode)){
    //Append user's area code to front of phone7 string using string interpolation
    const phoneText = document.createTextNode(`Your soul mate's phone number is ${areaCode}-${phone7}.`)
    let p = document.createElement('p')
    p.appendChild(phoneText)
    this.appendChild(p)
  }
})

const zipForm = document.querySelector('#zip')

//Add event listener for when user submits form
zipForm.addEventListener('submit',function(event){
	event.preventDefault()

  //Handle user input for 'Zip'
  const zipInput = document.querySelector('#zip .input').value
  const zipNum = parseInt(zipInput)

  //Handle output for 'Zip'
  phoneArr.push(zipNum)
  console.log(phoneArr)
  //Use reduce function to sum phone number with zip code
  let quotient = phoneArr.reduce(function(quotient,value){
    return quotient+value
  })
  const loveText = document.createTextNode(`Your Love Sum is ${quotient}. Wow that's high! It must be true love.`)
  let p = document.createElement('p')
  p.appendChild(loveText)
  this.appendChild(p)
})

//JOB SEARCHER
//Initialize salary array and establish max value
const salaryArr = [28000,45000,69000,91000,105000]
const salaryMax = Math.max(...salaryArr)

const salaryForm = document.querySelector('#salary')

//Add event listener for when user submits form
salaryForm.addEventListener('submit',function(event){
  event.preventDefault()

  //Handle user input for 'Desired Salary'
  const salary = document.querySelector('#salary .input').value

  //Handle output for 'Desired Salary'
  if(salary < salaryMax){ //make sure user's entry is less than max value in salary array
    //Use find function to check for a salary value greater than user's input and return it as a text output
    let desiredSal = salaryArr.find(value => value > salary)
    let salaryText = document.createTextNode(`We found a job offering $${desiredSal}. Please visit our website to learn more and apply.`)
    let p = document.createElement('p')
    p.appendChild(salaryText)
    this.appendChild(p)
  } else { //alert user if their salary entry is too high
    alert('Sorry there are no jobs that meet your salary requirements at this time.')
  }
})

//Initialize hourly wage array
const wageArr = [14.75,25,18,54,21]

const wageForm = document.querySelector('#wage')

//Add event listener for when user submits form
wageForm.addEventListener('submit',function(event){
  event.preventDefault()

  //Handle user input for 'Wage Threshold'
  const wage = document.querySelector('#wage .input').value

  //Handle output for 'Wage Threshold'
  let goodWage = wageArr.some(value => value > wage)
  console.log(goodWage)
  //Use some function to determine if any array values satisfy user's desired wage input
  if(goodWage == true){
    let wageText = document.createTextNode(`Our database shows at least one job that meets your wage requirements. Visit our website for more info.`)
    let p = document.createElement('p')
    p.appendChild(wageText)
    this.appendChild(p)
  } else { //alert user if their wage entry is too high
    alert('Sorry there are no jobs offering that hourly wage at this time.')
  }
})

//Initialize family array
let familySize = [3,4,2]

const candyForm = document.querySelector('#candy')

//Add event listener for when user submits form
candyForm.addEventListener('submit',function(event){
  event.preventDefault()

  //Handle user input for 'Candy'
  const pieces = document.querySelector('#candy .input').value

  //Handle output for 'Candy'
  //Use map function to create a second array where values are the user's entry divided by values in familySize array
  let candyArray = familySize.map(function(value){
    console.log('got to the return statement')
    return parseInt(pieces/value)
  })
  console.log(candyArray)
  const candyText = document.createTextNode(`If they're each given ${pieces} Skittles, then after sharing equally with everyone in their families, Bob, Linda, and James are left with this many Skittles, respectively: ${candyArray.join(', ')}.`)
  let p = document.createElement('p')
  p.appendChild(candyText)
  this.appendChild(p)
})
