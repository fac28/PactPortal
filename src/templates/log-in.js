const { layout }  = require("./layout.js")

function LogIn(req, res) {
    const title = "Log In";
    const content = /*html*/ `
      <div>
        <h1>${title}</h1>
           <form method="POST" class="Row">
          <div class="Stack" style="--gap: 0.25rem">
            <label for="username">username</label>
            <input type="username" id="username" name="username" required>
          </div>
          <div class="Stack" style="--gap: 0.25rem">
            <label for="password">password</label>
            <input type="password" id="password" name="password" required>
          </div>
          <button class="Button">Log in</button>
        </form>
      </div>
    `;
    const body = layout({ title, content });
    res.send(body);
  }

  module.exports = { LogIn }