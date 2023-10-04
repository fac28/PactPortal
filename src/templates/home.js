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
    `;

    const body = layout({ title, content });
    res.send(body);
}

module.exports = { home };
