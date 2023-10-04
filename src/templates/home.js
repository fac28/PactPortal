const { layout } = require('./layout.js');

function home(req, res) {
    const title = 'PactPortal';
    const content = /*html*/ `
    <div class="banner">
        <div class="title">
            <img src="images/logo.svg" /><h1>PactPortal</h1>
        </div>
        <p class="subtitle">Bringing wizards and demons together</p>
    </div>
    <div>
        <a href="/sign-up"><button>Sign Up</button></a>
        <a href="/log-in"><button>Log In</button></a>
    </div>
    <h2>We're disrupting sorcery.</h2>
    `;

    const body = layout({ title, content });
    res.send(body);
}

module.exports = { home };
