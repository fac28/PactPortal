const { layout } = require('./layout.js');

function home(req, res) {
    const title = 'PactPortal';
    const content = /*html*/ `
    `;

    const body = layout({ title, content });
    res.send(body);
}

module.exports = { home };
