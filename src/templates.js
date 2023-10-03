module.exports = { Layout, SignUp };

function Layout({ title, content }) {
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
  const title = "Create an account";
  const content = /*html*/ `
    <div>
      <h1>${title}</h1>
      <form method="POST" class="Row">
        <div>
          <label for="username">Username</label>
          <input type="text" id="username" name="username" required>
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required>
        </div>
        <button class="Button">Sign up</button>
      </form>

    </div>
  `;
  const body = Layout({ title, content });
  res.send(body);
}


