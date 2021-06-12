const cardsJSON = '[
  {
    "name": "Paolo Maldini",
    "jobTitle": "Front End Developer",
    "company": "Web Weavers",
    "experience": "3 years",
    "school": "University of Washington",
    "major": "Marketing",
    "email": "paolo@example.com",
    "linkedInUrl": "paolo.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS", "JavaScript", "Node", "Express"
    ]
  },
  {
    "name": "Barbara Bonansea",
    "jobTitle": "Software Engineer",
    "company": "Excellence in the Cloud",
    "experience": "12 years",
    "school": "University of Southern California",
    "major": "Computer Science",
    "email": "barbara@example.com",
    "linkedInUrl": "barbara.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "JavaScript", "C", "Go"
    ]
  },
  {
    "name": "Javier Hernandez",
    "jobTitle": "User Experience Engineer",
    "company": "Web Sites and More",
    "experience": "5 years",
    "school": "Seattle University",
    "major": "Performing Arts",
    "email": "javier@example.com",
    "linkedInUrl": "javier.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS"
    ]
  },
  {
    "name": "Maribel Dominguez",
    "jobTitle": "Front End Engineer",
    "company": "Bits and Bytes",
    "experience": "6 years",
    "school": "University of Washington",
    "major": "Mechanical Engineering",
    "email": "maribel@example.com",
    "linkedInUrl": "maribel.linkedinprofile.com",
    "codeLanguages": [
       "HTML", "CSS", "JavaScript", "React", "Vue", "Redux"
    ]
  }
 ]'

 const cards = JSON.parse(cardsJSON)

const directory = document.querySelector('.template-hook')

 cards.forEach(function(el){
   let entry = document.createElement('article')
   entry.innerHTML = `
     <div class="identity">
         <img src="img/headshot.jpg" class="headshot" alt="Headshot of a handsome white lab mix wearing a bowtie">
         <div class="name-position">
           <h1>${el.name}</h1>
           <h3>${el.jobTitle}</h3>
         </div>
       </div>
       <div class="info">
         <p><span class="spanstyle">${company}:</span> Web Weavers</p>
         <p><span class="spanstyle">${experience}:</span> 3 years</p>
         <p><span class="spanstyle">${school}:</span> University of Washington</p>
         <p><span class="spanstyle">${major}:</span> Marketing</p>
         <p><span class="spanstyle">${email}:</span> paolo@example.com</p>
         <div class="social-link">
           <img src="/img/linkedin.svg" alt="linkedIn logo">
           <a href=#>${linkedInUrl}</a>
         </div>
       </div>
   `
   directory.append(entry)
 })
