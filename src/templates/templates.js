module.exports = { layout, SignUp };

function layout({ title, content }) {
  return /*html*/ `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="normalize.css">
    <link rel="stylesheet" href="styles.css">
      </head>
      <body>
          <main>
            ${content}
          </main>
        </div>
      </body>
    </html>
  `;
}

function SignUp(req, res) {
    const title = 'Create an account';
    const content = /*html*/ `
      <div>
        <h1>${title}</h1>
        <form method="POST" class="Row">
          
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required>
          
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required>
          
          
  
          <fieldset>
          <legend>What are you?</legend>
          <label>
            <input type="radio" name="isWizard" value="1" required> Wizard
          </label>
          <label>
            <input type="radio" name="isWizard" value="0"> Demon
          </label>
          </fieldset>
          
  
          <label for="imageURL">Upload a photo</label>
          <input type="text" id="imageURL" name="imageURL">
  
          <label for="bio">Describe your powers</label>
          <input type="text" id="bio" name="bio">
  
          <button class="Button">Sign up</button>
        </form>
  
      </div>
    `;
    const body = layout({ title, content });
    res.send(body);
}

