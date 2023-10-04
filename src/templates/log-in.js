const { layout }  = require("./layout.js")

function LogIn(req, res) {
    const title = "Log In";
    const content = /*html*/ `
      <div>
        <h2>${title}</h2>
           <form method="POST" class="row">
            <label for="username">Username</label>
            <input type="username" id="username" name="username" required>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required>
          <button class="button">Log in</button>
        </form>
      </div>
    `;
    const body = layout({ title, content });
    res.send(body);
  }

  module.exports = { LogIn }