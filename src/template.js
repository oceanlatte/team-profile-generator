const generateEngineeers = templateData => {
  // filter by role: Engineer
  const engineerArr = templateData.filter(({ role }) => role === 'Engineer'); 

  const mappedEngineers = engineerArr.map(({ name, id, email, role, github }) => {
    return ` 
  <div class="card">
    <h2>${name}</h2>
    <p>${role}</p>
    <ul>
      <li>ID: ${id}</li>
      <li>Email: ${email}</li>
      <li>GitHub: ${github}</li>
    </ul>
  </div>
  `}).join('');

  return mappedEngineers;
}

const generateInterns = templateData => {
  // filter by role: Intern
  const internArr = templateData.filter(({ role }) => role === 'Intern'); 

  const mappedInterns = internArr.map(({ name, id, email, role, school }) => {
    return `
  <div class="card">
    <h2>${name}</h2>
    <p>${role}</p>
    <ul>
      <li>ID: ${id}</li>
      <li>Email: ${email}</li>
      <li>School: ${school}</li>
    </ul>
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
    <title>Team Portfolio Generator</title>
  </head>
  <body>
    <header>
    <h1>My Team</h1>
  </header>

<main class="container">
  <div class="card">
    <h2>${templateData[0].name}</h2>
    <p>Role: ${templateData[0].role}</p>
    <ul>
      <li>ID: ${templateData[0].id}</li>
      <li>Email: ${templateData[0].email}</li>
      <li>Office number: ${templateData[0].office}</li>
    </ul>
  </div>
  ${generateEngineeers(templateData)}
  ${generateInterns(templateData)}
  </main>
    
  </body>
  </html>
  `
}


module.exports = pageGenerator;