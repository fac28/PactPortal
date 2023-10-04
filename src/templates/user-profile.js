const { layout } = require('./layout.js');

function UserProfile(req, res, userData) {
    const { username, imageURL, bio } = userData;
    const title = 'My Account';
    const content = /*html*/ `
    <div>
        <h2>${title}</h2>
             <form method="POST" action="/user/update" class="row">
            <h3>${username}</h3>
            <label for="imageURL">Image URL:</label>
            <input type="text" id="imageURL" name="imageURL" value="${imageURL}">
            <label for="bio">Your Bio:</label>
            <input type="text" id="bio" name="bio" value="${bio}">
            <button class="button">Update Profile</button>
        </form>
           
    </form>
    
    <form method="POST" action="/user/delete"  class="Row">
        <button class="button" type="submit">Delete Profile</button>
    </form>
    
    </div>
    `;

    const body = layout({ title, content });
    res.send(body);
}

module.exports = { UserProfile };
