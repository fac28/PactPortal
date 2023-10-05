const { layout } = require('./layout.js');

function SignUp(req, res, usernameError = '') {
    const title = 'Create an account';
    const content = /*html*/ `
      <div>
        <h2>${title}</h2>
        <form method="POST" class="row">

            <label for="username">Username</label>
            <input type="text" id="username" name="username" required placeholder="${validation(usernameError)}">
          
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required>
  
          <label for="imageURL">Upload a Photo</label>
          <input type="text" id="imageURL" name="imageURL">
  
          <label for="bio">Describe your powers</label>
          <input type="text" id="bio" name="bio">

          <fieldset>
            <legend>What are you?</legend>
            <label>
              <input type="radio" name="isWizard" value="1" required> Wizard
            </label>
            <label>
              <input type="radio" name="isWizard" value="0"> Demon
            </label>
          </fieldset>
  
          <button class="button">Sign up</button>
        </form>
  
      </div>
    `;
    const body = layout({ title, content });
    res.send(body);
}

function validation(message) {
  if (message) {
      return /*html*/ `${message}`
  } else {
      return ''
  }
}

module.exports = { SignUp };
