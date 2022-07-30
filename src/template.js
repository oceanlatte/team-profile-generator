const pageGenerator = templateData => {
  const { name, id, email } = templateData;
  console.log('destructured page data', templateData);

  // change to a return instead of variable?
  const template = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Portfolio Generator</title>
  </head>
  <body>
    <h1>Team Profile's</h1>
    <ul>
      <li>${templateData.name}</li>
      <li>${templateData.id}</li>
      <li>${templateData.email}</li>
      <li>${templateData.office}</li>
    </ul>
    
  </body>
  </html>
  `
  console.log(template);
}


module.exports = pageGenerator;