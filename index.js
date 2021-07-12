// packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const managerArray = []
const internArray = []
const engineerArray = []

const startingHtml = (
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="../style.css"/>
        <title>Team Profile</title>
    </head>
    <body>
      <header id="Team-profile">
          <h1>Team Profile</h1>
      </header>
    `
)
const endingHtml = (
    `</body>
    </html>
    `
)
// prompt questions for Manager
function questions() {
  inquirer.prompt([
      {
          type:'input',
          message: "What is the team manager's name?",
          name: 'name'
      },
      {
          type: 'input',
          message: "What is the managers' id?",
          name: 'id',
      },
      {
          type: 'input',
          message: "What is the team manager's email?",
          name: 'email',
      },
      {
          type: 'input',
          message: "What is the team manager's office number?",
          name: 'OfficeNumber',
      },
   ])
     .then(function (data){
         let manager = new Manager(data.name, data.id, data.email, data.OfficeNumber);
         managerArray.push(manager)
         let managerHTML = (
             `
             <div class="title">
             <h2 class="name">${data.name}</h2>
             <h3 class="role">${data.role}</h3>
         </div>
         <div class="information">
             <li class="id">ID: ${data.id}</li>
             <li class="email" href="${data.email}">Email: ${data.email}</li>
             <li class="office">Office Number: ${data.OfficeNumber}</li>
         </div>
             `);
             fs.appendFile('index.html', managerHTML, function (err, data){
                if (err) console.log('error', err)})
            nextMember()        
    })
     .catch(function(err){
         console.log(err);
    })
   
    
};
// function to chooce next member
    function nextMember(){
        let choice = 
        inquirer.prompt([
            {
                type: 'list',
                message:'Which type of member would you like to add?',
                name: 'newMember',
                choices: ['Engineer', 'Intern', 'I do not want to add anymore',]
            }
            
        ]);
// if statement depending if choice is engineer these questions will be prompted
        if (choice.newMember === 'Engineer'){
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is the Engineers name?',
                    name: 'name',
                },
                {
                    type: 'input',
                    message: 'What us the Engineers id',
                    name: 'id',
                },
                {
                    type: 'input',
                    message: 'What is the Engineers email',
                    name: 'email',
                },
                {
                    type: 'input',
                    message: 'What is the Engineers Github?',
                    name: 'github',
                },
            ])
              .then(function(data){
                  var engineer = new Engineer(data.name, data.id, data.email, data.github);
                  engineerArray.push(engineer)
                  let engineerHtml = (
                      `<div class="title">
                          <h2 class="name">${data.name}</h2>
                          <h3 class="role">${data.role}</h3>
                      </div>
                      <div class="information">
                          <li class="id">ID: ${data.id}</li>
                          <li class="email" href="${data.email}">Email: ${data.email}</li>
                          <li class="github" href="${data.github}">Github: ${data.github}</li>
                      </div>
                      `
                  )
                  fs.appendFileSync('index.html', engineerHtml, function (err, data){
                    if (err) console.log('error', err)});
                  nextMember()
            })
              .catch(function(err){
                  console.log(err);
              });    
        }
        else if (choice.newMember === 'Intern'){
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is the Interns name?',
                    name: 'name',
                },
                {
                    type: 'input',
                    message: 'What us the Interns id?',
                    name: 'id',
                },
                {
                    type: 'input',
                    message: 'What is the Interns email?',
                    name: 'email',
                },
                {
                    type: 'input',
                    message: 'What is the Interns School?',
                    name: 'school',
                },
            ])
             .then(function(data){
                 var intern = new Intern(data.name, data.id, data.email, data.school);
                 internArray.push(intern)
                 let internHtml = (
                     `<div class="title">
                     <h2 class="name">${data.name}</h2>
                     <h3 class="role">${data.role}</h3>
                 </div>
                 <div class="information">
                     <li class="id">ID: ${data.id}</li>
                     <li class="email" href="${data.email}}">Email: ${data.email}</li>
                     <li class="school">School: ${data.school}</li>
                 </div>
                     `
                 )
                 fs.appendFileSync('index.html', internHtml, function (err, data){
                    if (err) console.log('error', err)});
                    nextMember();
             })
             .catch(function(err){
                 console.log(err)
             });
        }

        else (createFile())
} 
questions()

function createFile(){
    fs.writeFileSync('index.html', startingHtml, function (err, data){
        if (err) console.log('error', err)});
}

