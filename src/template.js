const generateEngineeers = templateData => {
  const engineerArr = templateData.filter(({ role }) => role === 'Engineer'); // filter by role

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

const pageGenerator = templateData => {
  
  console.log('template data', templateData);

  // SET UP: FILTER, to filter by role
 
  // change to a return instead of variable?
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
  <div class="card">
    <h2>INTERN name</h2>
    <p>Role</p>
    <ul>
      <li>ID:</li>
      <li>Email:</li>
      <li>School:</li>
    </ul>
  </div>
  </main>
    
  </body>
  </html>
  `
  console.log(template);
}


module.exports = pageGenerator;