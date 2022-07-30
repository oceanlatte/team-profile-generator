const generateEngineeers = templateData => {
  // filter by role: Engineer
  const engineerArr = templateData.filter(({ role }) => role === 'Engineer'); 

  const mappedEngineers = engineerArr.map(({ name, id, email, role, github }) => {
    return ` 
  <div class="card col-3 mx-3 my-5">
    <div class="card-header bg-secondary bg-gradient text-white">
      <h2 class="card-title">${name}</h2>
      <p class="mb-0">${role}</p>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          ID: ${id}
        </li>
        <li class="list-group-item">
          Email: 
          <a href="mailto:${email}">
            ${email}
          </a>
        </li>
        <li class="list-group-item">
          GitHub:
          <a href="github.com/${github}" target="_blank">
            ${github}
          </a>
        </li>
      </ul>
    </div>
  </div>
  `}).join('');

  return mappedEngineers;
}

const generateInterns = templateData => {
  // filter by role: Intern
  const internArr = templateData.filter(({ role }) => role === 'Intern'); 

  const mappedInterns = internArr.map(({ name, id, email, role, school }) => {
    return `
  <div class="card col-3 mx-3 my-5">
    <div class="card-header bg-light bg-gradient">
      <h2 class="card-title">${name}</h2>
      <p class="mb-0">${role}</p>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          ID: ${id}
        </li>
        <li class="list-group-item">
          Email: 
          <a href="mailto:${email}">
            ${email}
          </a>
        </li>
        <li class="list-group-item">
          School: ${school}
        </li>
      </ul>
    </div>
  </div>`
  }).join('');
  return mappedInterns;
}

const pageGenerator = templateData => {
  
  console.log('template data', templateData);
 
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"/>
    <title>Team Portfolio Generator</title>
  </head>
  <body>
    <header>
    <h1 class="bg-info bg-gradient text-center py-4">My Team</h1>
  </header>

<main class="container d-flex flex-wrap">
  <div class="card col-3 mx-3 my-5">
    <div class="card-header bg-dark text-white bg-gradient">
      <h2 class="card-title">${templateData[0].name}</h2>
      <p class="mb-0">${templateData[0].role}</p>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${templateData[0].id}</li>
        <li class="list-group-item">
          Email: 
          <a href="mailto:${templateData[0].email}">
            ${templateData[0].email}
          </a>
        </li>
        <li class="list-group-item">Office number: ${templateData[0].office}</li>
      </ul>
    </div>
  </div>
    ${generateEngineeers(templateData)}
    ${generateInterns(templateData)}
  </main>
    
  </body>
  </html>
  `
}


module.exports = pageGenerator;