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
        <div class="card"></div>
    </div>

    `;

    return layout({ title, content });
}

function users(req, res, isWizard) {
    const title = 'PactPortal';
    const users = getUserList(isWizard);
    console.log(users);
    const content = /*html*/ `
    <div class="banner">
    <div>
        <a href="/user"><button class="button">Profile</button></a>
        <a href="/log-out"><button class="button">Log Out</button></a>
    </div>
        ${users.map(user => createPost(user))}
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
        <button class="button"> Impose Ban </button>
    </div>
`
}

module.exports = { home, users };
