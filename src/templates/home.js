const { layout } = require('./layout.js');
const { getUserList } = require("../model/user.js");

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
        <a href="/sign-up"><button class="button">Sign Up</button></a>
        <a href="/log-in"><button class="button">Log In</button></a>
    </div>
    <h2>We're disrupting sorcery.</h2>
    <div class="cards">
        <div class="card">
            <div class="card-caption">
                <h4>Seals. Simplified.</h3>
                <p>QR codes provide an easier, more secure way to register pacts, making complicated seals a thing of the past.<p>
            </div>
            <img src="images/qr-code.png" />
        </div>
        <div class="card">
            <div class="card-caption">
                <h4>Esotericism for Everyone</h3>
                <p>By automating the most repetitive aspects of ritual magick behind the scenes, we help you focus on what's important: the infernal pact between a sorcerer and an astral entity.<p>
            </div>
            <img src="images/pentagram.png" />
        </div>
    </div>

    `;

    return layout({ title, content });
}

function users(req, res, isWizard) {
    console.log(!isWizard)
    const title = 'PactPortal';
    const users = getUserList(isWizard ? 0 : 1);
    const content = /*html*/ `
    <div class="banner">
        <div class="title">
            <img src="images/logo.svg" /><h1>PactPortal</h1>
        </div>
        <p class="subtitle">Bringing wizards and demons together</p>
    </div>
    <div class="match-container">
        <div>
            <a href="/user"><button class="button">Profile</button></a>
            <a href="/log-out"><button class="button">Log Out</button></a>
        </div>
        <h2>${isWizard ? 'Demons' : 'Wizards'} Near You</h2>
        ${users.map(user => createPost(user)).join('')}
    </div>
`
    return layout({ title, content });
}

function createPost(user) {
    return /*html*/ `
    <div class="post">
        <p class="post-username">${user.username}</p>
        <img src="${user.imageURL}" class="post-picture" />
        <p class="post-bio">${user.bio}</p>
        <button class="button">Banish</button>
    </div>
`
}

module.exports = { home, users };
